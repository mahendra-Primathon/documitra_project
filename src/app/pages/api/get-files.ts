// app/pages/api/get-files.ts
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { formId } = req.query;

    try {
      const client = new MongoClient(process.env.MONGODB_URI || "");
      await client.connect();
      const db = client.db("documitra");
      const collection = db.collection("formUploads");

      const files = await collection.find({ formId }).toArray();
      res.status(200).json({ files });
    } catch (error) {
      console.error("Error fetching files:", error);
      res.status(500).json({ message: "Failed to fetch files", error });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}