// /app/api/test-connection/route.ts

import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("documitra");
    const collections = await db.listCollections().toArray();
    return NextResponse.json({ message: "Connected successfully!", collections });
  } catch (error) {
    console.error("Connection error:", error);
    return NextResponse.json({ message: "Connection failed", error }, { status: 500 });
  }
}
