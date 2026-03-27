import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "eno.ahmadi22@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}
