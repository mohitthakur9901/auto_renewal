import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Img,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  qrCode: string;
  address: string;
  name: string;
  placeName?: string;
  upiid?: string;
}

function EmailTemplate({
  qrCode,
  address,
  name,
  placeName,
  upiid,
}: EmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Membership Reminder</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Img src={qrCode} style={qrCodeStyle} />
            <Text style={text}>Hi {name},</Text>
            <Text style={text}>Membership Reminder from {placeName}</Text>
            <Text style={text}>Address: {address}</Text>
            <Text style={text}>UPI ID: {upiid}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#242424",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0",
  padding: "0",
  width: "100%",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const section = {
  margin: "0 auto",
  width: "100%",
};

const qrCodeStyle = {
  width: "100%",
  height: "auto",
};

const text = {
  color: "#242424",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
};

export default EmailTemplate;
