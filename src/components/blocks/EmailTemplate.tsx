import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Img,
  Text,
  Link,
  Button,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  qrCode: string;
  address: string;
  name: string;
  placeName?: string;
  upiid?: string;
  expirydate: Date
}

function EmailTemplate({
  qrCode,
  address,
  name,
  placeName,
  upiid,
  expirydate

}: EmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Membership Reminder</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Img src={qrCode} style={qrCodeStyle} />
            <Text style={text}>Hi There {name},</Text>
            <Text style={text}>Your Membership Reminder from {placeName}</Text>
            <Text style={text}>Your Membership Expiry Date: {expirydate.toISOString()}</Text>
            <Text style={text}>Address: {address}</Text>
            <Text style={text}>
              You can pay your renewal directly using the UPI ID :
            </Text>
            {/* <Button
              href={`http://localhost:3000/pay?pa=${upiid}`}
            >
              Click here to pay via UPI (opens GPay, PhonePe, etc.)
            </Button>
            <Text style={text}>
              (Works on Google Pay, PhonePe, Paytm, etc.)
            </Text> */}
            <Text style={text}>
              You can also pay via UPI ID : {upiid}
            </Text>
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
