
import EmailTemplate from "@/components/blocks/EmailTemplate";
import {Resend} from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

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

export async  function sendEmail({ to, from, dynamicTemplateData }: SendMailProps) {
    
    await resend.emails.send({
        from: from,
        to: to,
        subject: `Hi ${dynamicTemplateData.name}, membership reminder from ${dynamicTemplateData.placeName}`,
        react: EmailTemplate(dynamicTemplateData) ,
    })
}