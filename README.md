# 📊 Analytics Dashboard & Membership Management App

A full-stack Next.js application for managing memberships, sending automated WhatsApp & Email messages, and monitoring analytics via a powerful dashboard.

Built with:
- ✅ Next.js (App Router)
- ✅ Clerk for authentication
- ✅ PostgreSQL
- ✅ Twilio (WhatsApp & Email)
- ✅ Resend (Email service)
- ✅ ShadCN UI
- ✅ Corn Jobs with `cron`
- ✅ Docker & Docker Compose for deployment

---

## 🚀 Features

### 🧠 Analytics Dashboard
- 📌 **Total Members Count**
- ✅ **Total Active Members**
- 🚫 **Total Inactive Members**
- ⏳ **Total Pending Members**

### 💬 WhatsApp SMS Features
- 📤 **Total Sent Messages**
- ⏱ **Upcoming Scheduled Messages**
- 📚 **Previous Sent Messages**

### 📧 Email Features
- 📤 **Total Sent Emails**
- ⏱ **Upcoming Scheduled Emails**
- 📚 **Previous Sent Emails**

---

## 🧩 Backend Logic

- 🔁 **Automated WhatsApp Messaging**
- 🔁 **Automated Email Sending**
- 🔐 **Membership Verification**
- ✅ **Membership Activation**
- 🚫 **Membership Deactivation**
- 🧭 **Routing Guard**  
  Users must have an **active membership** to access features beyond the dashboard.

---

## 🛠️ App Features

- 🔑 **User Authentication** (via Clerk)
- 👤 **Admin Member Management**
- 📲 **Twilio WhatsApp & Email Integration**
- 📈 **Analytics Dashboard**
- 💸 **Payment Gateway Integration** (PhonePe, Razorpay)
- 🔧 **SMS Gateway Integration**
- ⚙️ **Settings Page**
  - Client-wrapped UI
  - Generic component for create/update
  - Image preview support

---

## ✉️ Email Workflow (Approach)

1. ✨ Create reusable **Email Templates**
2. ⚙️ Create `sendEmail()` function
3. 📅 Create `scheduleEmail()` function
4. 🧮 Fetch and manage emails from database

### 🧑‍💼 Add User Details:
- Full Name
- Address
- Social Media Links
- QR Code
- Membership Plan + Features

---

## 🐳 Docker Support

**For Local Deployment:**

```bash
docker-compose up --build
