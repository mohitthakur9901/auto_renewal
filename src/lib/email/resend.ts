import EmailTemplate from "@/components/blocks/EmailTemplate";
import { Resend } from "resend";

let resend: Resend | null = null;

function getResendClient() {
  if (!resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("Missing RESEND_API_KEY");
    resend = new Resend(key);
  }
  return resend;
}
interface SendMailProps {
  to: string;
  from: string;
  dynamicTemplateData: {
    qrCode: string;
    address: string;
    name: string;
    placeName?: string;
    upiid?: string;
  };
}

export async function sendEmail({
  to,
  from,
  dynamicTemplateData,
}: SendMailProps) {
  const resend = getResendClient();
  await resend.emails.send({
    from: from,
    to: to,
    subject: `Hi ${dynamicTemplateData.name}, membership reminder from ${dynamicTemplateData.placeName}`,
    react: EmailTemplate(dynamicTemplateData),
  });
}
