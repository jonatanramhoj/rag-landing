import { NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeTemplate from "@/components/emails/welcome-template";
import { saveBetaUser } from "@/firebase/queries";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const betaUser = await req.json();
    const { name, email } = betaUser;
    console.log("betaUser", betaUser);

    // save user to beta users collection in firestore
    await saveBetaUser(betaUser);

    // send welcome email
    const { data } = await resend.emails.send({
      from: "hello@jonatanr.ai",
      to: email,
      subject:
        "Welcome to the RAG Agent Crash Course Beta — Let’s Get Started!",
      react: WelcomeTemplate({ name }),
    });

    console.log("data", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
