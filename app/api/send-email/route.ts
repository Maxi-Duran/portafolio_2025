// app/api/send-email/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    console.log("req", req);
    const { name, email, subject, message } = await req.json();
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["max.duran@duocuc.cl"],
      subject: subject,
      html: `<p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error: any) {
    console.log("error", error);
    return new Response(
      JSON.stringify({ succes: false, error: error.message }),
      { status: 500 }
    );
  }
}
