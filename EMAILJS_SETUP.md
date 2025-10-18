# EmailJS Setup Guide

## การตั้งค่า EmailJS สำหรับฟอร์มติดต่อ

ฟอร์มติดต่อของเราใช้ EmailJS เป็นบริการส่งอีเมล ซึ่งเป็นบริการฟรีที่ช่วยให้สามารถส่งอีเมลจากหน้าเว็บได้โดยไม่ต้องมี Backend

### ขั้นตอนการตั้งค่า

#### 1. สมัคร EmailJS

1. ไปที่ [https://www.emailjs.com/](https://www.emailjs.com/)
2. คลิก "Sign Up" และสร้างบัญชีฟรี
3. ยืนยันอีเมล

#### 2. เพิ่ม Email Service

1. เข้าสู่ระบบและไปที่ Dashboard
2. คลิก "Add New Service"
3. เลือก Email Provider (แนะนำ Gmail)
4. กรอกข้อมูล:
   - **Service Name**: เช่น "Wealthy Tigers Gmail"
   - **Email**: admin@wealthytigers.com (หรืออีเมลที่ต้องการรับ)
   - **Password/App Password**: รหัสผ่านของอีเมล
5. คลิก "Create Service"
6. **บันทึก Service ID** ที่ได้

**หมายเหตุสำหรับ Gmail:**
- ถ้าใช้ Gmail ควรสร้าง "App Password" แทนการใช้รหัสผ่านปกติ
- ไปที่ Google Account Settings > Security > 2-Step Verification > App Passwords
- สร้าง App Password สำหรับ "Mail"

#### 3. สร้าง Email Template

1. ไปที่ "Email Templates" ใน Dashboard
2. คลิก "Create New Template"
3. ตั้งค่า Template:

```
Template Name: Contact Form - Wealthy Tigers

Subject: New Contact Form Submission from {{from_name}}

Content:
New message from Wealthy Tigers Contact Form
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Subject: {{subject}}

Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This message was sent via wealthytigers.com contact form
Reply to: {{reply_to}}
```

4. ใน "Settings" ของ Template:
   - **From Name**: Wealthy Tigers Website
   - **From Email**: (EmailJS จะใช้อีเมลจาก Service ที่ตั้งค่าไว้)
   - **To Email**: {{to_email}} (หรือกำหนดเป็น admin@wealthytigers.com)
   - **Reply To**: {{reply_to}}

5. คลิก "Save"
6. **บันทึก Template ID** ที่ได้

#### 4. รับ Public Key

1. ไปที่ "Account" > "General"
2. หา "Public Key" (หรือ "API Key")
3. **บันทึก Public Key** นี้

#### 5. อัปเดตในโค้ด

เปิดไฟล์ `assets/js/contact.js` และแก้ไขบรรทัดต้นๆ:

```javascript
const EMAILJS_CONFIG = {
    serviceID: 'YOUR_SERVICE_ID',  // ใส่ Service ID จากขั้นตอนที่ 2
    templateID: 'YOUR_TEMPLATE_ID', // ใส่ Template ID จากขั้นตอนที่ 3
    publicKey: 'YOUR_PUBLIC_KEY'    // ใส่ Public Key จากขั้นตอนที่ 4
};
```

ตัวอย่าง:
```javascript
const EMAILJS_CONFIG = {
    serviceID: 'service_abc123',
    templateID: 'template_xyz789',
    publicKey: 'user_1234567890abcdef'
};
```

### ทดสอบระบบ

1. บันทึกไฟล์และ deploy เว็บไซต์
2. เปิดหน้า Contact Us
3. กรอกฟอร์มและกด Submit
4. ตรวจสอบว่าอีเมลเข้ามาที่ admin@wealthytigers.com หรือไม่

### Fallback Method

หากไม่ได้ตั้งค่า EmailJS ระบบจะใช้ fallback method ที่เปิดโปรแกรมอีเมลบนเครื่องของผู้ใช้แทน (mailto:)

### การแก้ไขปัญหา

**อีเมลไม่ส่ง:**
1. ตรวจสอบว่าใส่ Service ID, Template ID, และ Public Key ถูกต้อง
2. เปิด Browser Console (F12) เพื่อดู error message
3. ตรวจสอบว่า Email Service ใน EmailJS Dashboard ทำงานปกติ

**Gmail ไม่อนุญาตให้ส่ง:**
1. เปิด "Less secure app access" ใน Google Account (ไม่แนะนำ)
2. หรือสร้าง "App Password" แทน (แนะนำ)

**ขีดจำกัดการส่ง:**
- EmailJS แผนฟรีจำกัด 200 อีเมล/เดือน
- หากต้องการส่งมากกว่า ให้อัปเกรดเป็นแผนที่ใช้เงิน

### ทางเลือกอื่น

หากไม่ต้องการใช้ EmailJS สามารถใช้บริการอื่นๆ เช่น:
- **FormSpree**: https://formspree.io/
- **Netlify Forms**: https://www.netlify.com/products/forms/
- **SendGrid**: https://sendgrid.com/
- หรือสร้าง Backend API เอง

---

## English Version

## EmailJS Setup Guide for Contact Form

Our contact form uses EmailJS service to send emails, which is a free service that allows sending emails from web pages without a backend.

### Setup Steps

#### 1. Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email

#### 2. Add Email Service

1. Log in and go to Dashboard
2. Click "Add New Service"
3. Choose Email Provider (recommended: Gmail)
4. Fill in details:
   - **Service Name**: e.g., "Wealthy Tigers Gmail"
   - **Email**: admin@wealthytigers.com (or your receiving email)
   - **Password/App Password**: email password
5. Click "Create Service"
6. **Save the Service ID**

**Note for Gmail:**
- Use "App Password" instead of regular password
- Go to Google Account Settings > Security > 2-Step Verification > App Passwords
- Create App Password for "Mail"

#### 3. Create Email Template

1. Go to "Email Templates" in Dashboard
2. Click "Create New Template"
3. Set up Template (see Thai version for template content)
4. Click "Save"
5. **Save the Template ID**

#### 4. Get Public Key

1. Go to "Account" > "General"
2. Find "Public Key" (or "API Key")
3. **Save this Public Key**

#### 5. Update Code

Open `assets/js/contact.js` and edit the configuration:

```javascript
const EMAILJS_CONFIG = {
    serviceID: 'service_abc123',      // Your Service ID
    templateID: 'template_xyz789',    // Your Template ID
    publicKey: 'user_1234567890abcdef' // Your Public Key
};
```

### Testing

1. Save the file and deploy the website
2. Open Contact Us page
3. Fill the form and submit
4. Check if email arrives at admin@wealthytigers.com

### Fallback Method

If EmailJS is not configured, the system will use a fallback method that opens the user's email program (mailto:)

---

**Need Help?** Contact the development team or refer to [EmailJS Documentation](https://www.emailjs.com/docs/)


