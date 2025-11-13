import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const session_id = searchParams.get("session_id");

    if (!session_id) {
      return new Response(JSON.stringify({ error: "Missing session ID" }), { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items.data.price.product"],
    });

    return new Response(JSON.stringify(session), { status: 200 });
  } catch (err) {
    console.error("Stripe session retrieval error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
