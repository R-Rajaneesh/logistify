import type { APIRoute } from "astro";
import crypto from "crypto";
import nanoid from "nanoid";

export const POST: APIRoute = async ({ request }) => {
  const signupDetails: { password: string; email: string } =
    await request.json();
  const salt = nanoid.random(64);
  const hashedPassword = crypto.scryptSync(signupDetails.password, salt, 64);
  const data = {
    status: 200,
    message: "Successfully signed up",
  };
  return new Response(JSON.stringify(data));
};
