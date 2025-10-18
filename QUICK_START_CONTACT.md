# 🚀 Quick Start: Contact Form & Map

## สิ่งที่เพิ่มเข้ามาแล้ว ✅

### 1. 📧 ระบบส่งอีเมล
- ฟอร์มติดต่อส่งข้อความไปยัง **admin@wealthytigers.com**
- ใช้ EmailJS (ฟรี, ไม่ต้อง backend)
- มี fallback: เปิดโปรแกรมอีเมลถ้า EmailJS ไม่พร้อม

### 2. 🗺️ Google Maps
- แสดงแผนที่ที่ตั้งบริษัท
- ที่อยู่: United Center Building, Bangkok
- Responsive และสวยงาม

---

## ⚡ วิธีเปิดใช้งาน (5 นาที)

### Option 1: ใช้ EmailJS (แนะนำ)

1. **สมัคร EmailJS** → https://www.emailjs.com/ (ฟรี)

2. **ตั้งค่า 3 ขั้นตอน:**
   - สร้าง Email Service (เชื่อม Gmail/Outlook)
   - สร้าง Email Template (ตามตัวอย่างใน `EMAILJS_SETUP.md`)
   - คัดลอก Service ID, Template ID, Public Key

3. **แก้ไขโค้ด:**
   เปิดไฟล์ `assets/js/contact.js` บรรทัด 5-9:
   ```javascript
   const EMAILJS_CONFIG = {
       serviceID: 'service_abc123',      // ← ใส่ของคุณ
       templateID: 'template_xyz789',    // ← ใส่ของคุณ
       publicKey: 'user_1234567890abcdef' // ← ใส่ของคุณ
   };
   ```

4. **Deploy และทดสอบ!** 🎉

**ดูคู่มือเต็ม:** อ่าน `EMAILJS_SETUP.md`

---

### Option 2: ใช้ Fallback (ไม่ต้องตั้งค่า)

ถ้าไม่ตั้งค่า EmailJS:
- ✅ ระบบจะเปิดโปรแกรมอีเมลของผู้ใช้อัตโนมัติ
- ✅ ข้อมูลจากฟอร์มจะเติมให้เรียบร้อย
- ✅ ผู้ใช้แค่กดส่งจากโปรแกรมของตัวเอง

**ไม่ต้องทำอะไรเพิ่ม - ทำงานทันที!**

---

## 📋 ไฟล์ที่แก้ไข

| ไฟล์ | การเปลี่ยนแปลง |
|------|----------------|
| `contact.html` | เพิ่ม EmailJS library, Google Maps section |
| `assets/js/contact.js` | ระบบส่งอีเมล + fallback |
| `assets/css/style.css` | สไตล์แผนที่และข้อความแจ้งเตือน |
| `assets/js/language.js` | คำแปลสำหรับแผนที่ |

---

## 🎯 ทดสอบการทำงาน

1. เปิด `contact.html` ในเบราว์เซอร์
2. กรอกฟอร์ม
3. กดปุ่ม "ส่งข้อความ"
4. ดูผลลัพธ์:
   - ✅ มี EmailJS → อีเมลส่งไปที่ admin@wealthytigers.com
   - ✅ ไม่มี EmailJS → เปิดโปรแกรมอีเมล
5. เลื่อนลงดูแผนที่ (ด้านล่างฟอร์ม)

---

## 🎨 คุณสมบัติ

### ฟอร์ม
- ✅ ตรวจสอบข้อมูลแบบ real-time
- ✅ จัดรูปแบบเบอร์โทรอัตโนมัติ (0XX-XXX-XXXX)
- ✅ แสดงข้อความ error/success สวยงาม
- ✅ รองรับไทย/อังกฤษ

### แผนที่
- ✅ คลิกซูมได้
- ✅ Responsive (มือถือ/แท็บเล็ต/คอม)
- ✅ Hover effect

---

## 📧 อีเมลที่จะได้รับ

```
From: Wealthy Tigers Website
To: admin@wealthytigers.com
Subject: New Contact Form Submission from [ชื่อ]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
From: ชื่อผู้ส่ง
Email: email@example.com
Phone: 08X-XXX-XXXX
Company: บริษัทตัวอย่าง

Subject: ความร่วมมือ

Message:
สวัสดีครับ สนใจความร่วมมือ...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## ❓ FAQ

**Q: ต้องจ่ายเงินไหม?**  
A: EmailJS แผนฟรี = 200 อีเมล/เดือน (เพียงพอสำหรับเว็บเล็ก)

**Q: ถ้าไม่อยากใช้ EmailJS?**  
A: ไม่เป็นไร! ระบบจะใช้ fallback (mailto) อัตโนมัติ

**Q: แผนที่เปลี่ยนที่อยู่ได้ไหม?**  
A: ได้ แก้ที่ `contact.html` บรรทัด 150 (URL ใน iframe src)

**Q: มีปัญหาอีเมลไม่ส่ง**  
A: 
1. เปิด Browser Console (F12) ดู error
2. ตรวจสอบ EmailJS keys ว่าใส่ถูกต้อง
3. อ่าน troubleshooting ใน `EMAILJS_SETUP.md`

---

## 📚 เอกสารเพิ่มเติม

- **คู่มือการตั้งค่า:** `EMAILJS_SETUP.md`
- **สรุปการอัปเดต:** `CONTACT_FORM_UPDATE.md`
- **EmailJS Docs:** https://www.emailjs.com/docs/

---

## ✨ พร้อมใช้งาน!

หน้า Contact Us พร้อมแล้ว! 🎉

- ไม่ได้ตั้งค่า EmailJS? → ใช้งานได้เลย (fallback mode)
- ตั้งค่า EmailJS แล้ว? → อัตโนมัติเต็มรูปแบบ!

**Happy Coding! 🐯**

---

_หากต้องการความช่วยเหลือ ดูเอกสารข้างต้นหรือเปิด Browser Console เพื่อดู error messages_


