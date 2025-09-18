import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  // Create a transporter object using SMTP transport.
  // You need to configure your email provider details here.
  // IMPORTANT: Use environment variables to store sensitive data!
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST, // e.g., 'smtp.gmail.com'
    port: Number(process.env.EMAIL_SERVER_PORT), // e.g., 465
    secure: process.env.EMAIL_SERVER_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER, // your email address
      pass: process.env.EMAIL_SERVER_PASSWORD, // your email password or app password
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_SERVER_USER}>`,
    to: 'bit3tech.tr@gmail.com', // The address that will receive the form submissions
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    text: message,
    html: `<h1>New Contact Submission</h1><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
