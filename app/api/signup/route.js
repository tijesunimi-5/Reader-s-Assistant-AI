import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { firstName, lastName, email, password } = await req.body;
    const client = await clientPromise;
    const db = client.db("userData");
    const exisitingUser = await db.collection("users").findOne({ email });

    if (exisitingUser) {
      return new Response(
        JSON.stringify({ success: false, message: "User already exists" }),
        { status: 409 }
      );
    }

    const result = await db.collection("users").insertOne({
      firstName,
      lastName,
      email,
      password,
    });
    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
    });
  } catch (error) {
    console.error('Signup error:', error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
