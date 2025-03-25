import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      JSON.stringify({
        success: false,
        message: "Email and password are required",
      }),
        { statusbar: 400 };
    }

    const client = await clientPromise;
    const db = client.db("userData");
    const user = await db.collection("users").findOne({ email });

    if (!user || user.password !== password) {
      return new Response(
        JSON.stringify({ success: false, message: "Login successful", user }),
        { status: 401 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Login succesful", user }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      { status: 500 }
    );
  }
}
