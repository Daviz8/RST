import nodemailer from "nodemailer";
import dotenv  from "dotenv";

dotenv.config()

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});4

export async function sendVerification(email: string, token: string) {
  const link = `http://localhost:3000/auth/verify/${token}`;
  await transporter.sendMail({
    to: email,
    subject: "Verify your email",
    html: `Click <a href="${link}">here</a> to verify.`,
  });
}