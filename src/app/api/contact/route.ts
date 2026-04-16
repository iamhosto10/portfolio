import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  console.log("Nuevo mensaje:", { name, email, message });

  // Aquí luego puedes enviar email con nodemailer o Resend

  return NextResponse.json({ success: true });
}
