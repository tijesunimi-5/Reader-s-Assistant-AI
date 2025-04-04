import { connectToDatabase } from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email and message are required",
        }),
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const collection = db.collection("reviews");

    const result = await collection.insertOne({
      email,
      message,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ success: true, insertedId: result.insertedId }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error posting review:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Internal server error" }),
      { status: 500 }
    );
  }
}
