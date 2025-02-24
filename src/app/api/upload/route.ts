// app/pages/api/upload.ts
import { v2 as cloudinary } from "cloudinary";
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";



// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { file, fileType, formId } = req.body;

    try {
      // Upload to Cloudinary
      const uploadResponse = await cloudinary.uploader.upload(file, {
        resource_type: fileType === "pdf" ? "raw" : "image",
      });

      // Store File URL in MongoDB
      const client = new MongoClient(process.env.MONGODB_URI || "");
      await client.connect();
      const db = client.db("documitra");
      const collection = db.collection("formUploads");

      await collection.insertOne({
        formId: formId,
        fileUrl: uploadResponse.secure_url,
        fileType: fileType,
        uploadedAt: new Date(),
      });

      res.status(200).json({ message: "File uploaded and URL stored", url: uploadResponse.secure_url });
    } catch (error) {
      console.error("Upload Error:", error);
      res.status(500).json({ message: "Upload failed", error });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}