# Contact Form Update Summary

## การอัปเดตหน้า Contact Us

เอกสารนี้สรุปการเปลี่ยนแปลงที่ทำกับหน้า Contact Us

### ✨ ฟีเจอร์ใหม่

#### 1. ระบบส่งอีเมลอัตโนมัติ
- ✅ เพิ่มการเชื่อมต่อกับ EmailJS เพื่อส่งอีเมลจากฟอร์มไปยัง `admin@wealthytigers.com`
- ✅ มีระบบ fallback ที่เปิดโปรแกรมอีเมลในเครื่องหาก EmailJS ไม่พร้อมใช้งาน
- ✅ แสดงข้อความแจ้งเตือนเมื่อส่งสำเร็จหรือเกิดข้อผิดพลาด
- ✅ มีปุ่ม loading animation ขณะกำลังส่ง

#### 2. Google Maps Integration
- ✅ เพิ่ม section แผนที่ Google Maps แสดงที่ตั้งของบริษัท
- ✅ ใช้ URL: https://maps.app.goo.gl/2omLCDKqukmoU4XLA (United Center Building, Bangkok)
- ✅ แผนที่รองรับ responsive และมี hover effect สวยงาม

#### 3. การปรับปรุงอื่นๆ
- ✅ อัปเดตอีเมลจาก `info@wealthytigers.com` เป็น `admin@wealthytigers.com`
- ✅ เพิ่มการแปลภาษาใหม่สำหรับ section แผนที่ (ไทย/อังกฤษ)
- ✅ เพิ่มสไตล์ CSS สำหรับข้อความแจ้งเตือนและ error messages

---

## 📋 ไฟล์ที่แก้ไข

### 1. `contact.html`
**การเปลี่ยนแปลง:**
- เพิ่ม EmailJS SDK library
- เพิ่ม Google Maps section หลังฟอร์มติดต่อ
- เปลี่ยนอีเมลแสดงจาก info@ เป็น admin@

**ตำแหน่ง Google Maps Section:**
```html
<!-- Google Map Section -->
<section class="map-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title" data-i18n="contact.mapTitle">พบเรา</h2>
            <p class="section-subtitle" data-i18n="contact.mapSubtitle">ที่ตั้งของเรา</p>
        </div>
        <div class="map-container">
            <iframe src="..." ></iframe>
        </div>
    </div>
</section>
```

### 2. `assets/js/contact.js`
**การเปลี่ยนแปลง:**
- เพิ่ม EmailJS configuration
- อัปเดตฟังก์ชัน `handleFormSubmission()` ให้ส่งอีเมลจริงผ่าน EmailJS
- เพิ่มฟังก์ชัน `sendViaMailto()` สำหรับ fallback
- เพิ่มฟังก์ชัน `getSubjectText()` สำหรับแปลหัวข้อ

**สิ่งที่ต้องตั้งค่า:**
```javascript
const EMAILJS_CONFIG = {
    serviceID: 'YOUR_SERVICE_ID',  // ต้องแก้ไข
    templateID: 'YOUR_TEMPLATE_ID', // ต้องแก้ไข
    publicKey: 'YOUR_PUBLIC_KEY'    // ต้องแก้ไข
};
```

### 3. `assets/css/style.css`
**การเปลี่ยนแปลง:**
- เพิ่มสไตล์สำหรับ `.map-section`
- เพิ่มสไตล์สำหรับ `.form-message` (success, error, info)
- เพิ่มสไตล์สำหรับ `.field-error`
- เพิ่ม animation `slideInDown`
- เพิ่ม responsive styles สำหรับหน้าจอขนาดต่างๆ

### 4. `assets/js/language.js`
**การเปลี่ยนแปลง:**
- เพิ่มคำแปล `mapTitle` และ `mapSubtitle` ในภาษาไทยและอังกฤษ

```javascript
// Thai
mapTitle: 'พบเรา',
mapSubtitle: 'ที่ตั้งของเรา',

// English
mapTitle: 'Find Us',
mapSubtitle: 'Our Location',
```

### 5. `EMAILJS_SETUP.md` (ใหม่)
**ไฟล์ใหม่:**
- คู่มือการตั้งค่า EmailJS แบบละเอียด
- ครอบคลุมทั้งภาษาไทยและอังกฤษ
- มีตัวอย่าง email template
- วิธีแก้ไขปัญหาทั่วไป

---

## 🚀 วิธีใช้งาน

### ขั้นตอนที่ 1: ตั้งค่า EmailJS (แนะนำ)

1. อ่านคู่มือใน `EMAILJS_SETUP.md`
2. สมัครบัญชี EmailJS ที่ https://www.emailjs.com/
3. ตั้งค่า Email Service และ Template
4. คัดลอก Service ID, Template ID, และ Public Key
5. แก้ไขไฟล์ `assets/js/contact.js`:
   ```javascript
   const EMAILJS_CONFIG = {
       serviceID: 'service_abc123',      // ใส่ของคุณ
       templateID: 'template_xyz789',    // ใส่ของคุณ
       publicKey: 'user_1234567890abcdef' // ใส่ของคุณ
   };
   ```
6. บันทึกและ deploy

### ขั้นตอนที่ 2: ทดสอบ

1. เปิดหน้า Contact Us บนเว็บไซต์
2. กรอกข้อมูลในฟอร์ม:
   - ชื่อ
   - อีเมล
   - เบอร์โทรศัพท์ (ไม่บังคับ)
   - บริษัท (ไม่บังคับ)
   - หัวข้อ
   - ข้อความ
3. กดปุ่ม "ส่งข้อความ"
4. ตรวจสอบว่าได้รับอีเมลที่ admin@wealthytigers.com

### ขั้นตอนที่ 3 (ทางเลือก): ใช้งานแบบ Fallback

หากไม่ต้องการตั้งค่า EmailJS ระบบจะทำงานแบบ fallback โดยอัตโนมัติ:
- เมื่อผู้ใช้กดส่งฟอร์ม จะเปิดโปรแกรมอีเมลในเครื่องของพวกเขา
- มีข้อมูลจากฟอร์มเติมไว้ล่วงหน้าแล้ว
- ผู้ใช้แค่กดส่งจากโปรแกรมอีเมลของตัวเอง

---

## 🎨 คุณสมบัติของ UI/UX

### ฟอร์มติดต่อ
- ✅ Real-time validation
- ✅ แสดง error messages เป็นภาษาไทย
- ✅ Format เบอร์โทรศัพท์อัตโนมัติ (0XX-XXX-XXXX)
- ✅ Loading state ขณะกำลังส่ง
- ✅ Success/Error messages ที่สวยงาม
- ✅ Auto-resize textarea
- ✅ รองรับทั้งภาษาไทยและอังกฤษ

### Google Maps
- ✅ Embed แบบ responsive
- ✅ มี hover effect (ยกขึ้นเมื่อ hover)
- ✅ Border radius สวยงาม
- ✅ รองรับ mobile และ tablet
- ✅ Loading แบบ lazy load

### ข้อความแจ้งเตือน
- ✅ สีแยกตามประเภท (เขียว=สำเร็จ, แดง=ผิดพลาด, ฟ้า=ข้อมูล)
- ✅ มีไอคอนประกอบ
- ✅ Animation slide in จากด้านบน
- ✅ ปิดอัตโนมัติหลัง 5 วินาที

---

## 📱 Responsive Design

### Desktop (> 1024px)
- แผนที่กว้าง 1200px max
- ฟอร์มและข้อมูลติดต่อแสดงเคียงกัน
- แผนที่สูง 450px

### Tablet (768px - 1024px)
- Layout ปรับเป็นแนวตั้ง
- แผนที่ยังคงขนาดเต็ม

### Mobile (< 768px)
- แผนที่ลดความสูงเป็น 350px
- ฟอร์มกว้างเต็ม
- ปุ่มและข้อความปรับขนาดให้เหมาะสม

---

## 🔧 การแก้ไขปัญหา

### อีเมลไม่ส่ง
1. ✅ ตรวจสอบว่าใส่ EmailJS keys ถูกต้อง
2. ✅ เปิด Browser Console (F12) ดู error
3. ✅ ตรวจสอบ EmailJS Dashboard ว่า service ทำงานปกติ
4. ✅ ตรวจสอบว่ายังไม่เกินโควต้า (200 emails/เดือนสำหรับแผนฟรี)

### แผนที่ไม่แสดง
1. ✅ ตรวจสอบ internet connection
2. ✅ ตรวจสอบว่า iframe ไม่ถูก ad blocker บล็อก
3. ✅ รอสักครู่ให้ Google Maps โหลด

### Validation ไม่ทำงาน
1. ✅ ตรวจสอบว่า JavaScript files โหลดครบ
2. ✅ ตรวจสอบ Console ว่ามี error หรือไม่
3. ✅ Clear browser cache และ reload

---

## 📧 Template อีเมลที่จะส่ง

เมื่อผู้ใช้กรอกฟอร์ม คุณจะได้รับอีเมลในรูปแบบ:

```
Subject: New Contact Form Submission from [ชื่อผู้ส่ง]

New message from Wealthy Tigers Contact Form
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From: [ชื่อ]
Email: [อีเมล]
Phone: [เบอร์โทร]
Company: [บริษัท]

Subject: [หัวข้อ]

Message:
[ข้อความ]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This message was sent via wealthytigers.com contact form
Reply to: [อีเมลผู้ส่ง]
```

---

## 🔐 ความปลอดภัย

- ✅ ใช้ EmailJS Public Key (ไม่มี Secret Key ในโค้ด)
- ✅ Client-side validation
- ✅ Email format validation
- ✅ XSS protection (ไม่ใช้ innerHTML กับ user input)
- ✅ Rate limiting ผ่าน EmailJS service

**คำแนะนำ:**
- ถ้าต้องการความปลอดภัยเพิ่มเติม ควรเพิ่ม reCAPTCHA
- พิจารณาใช้ server-side validation สำหรับ production

---

## 📝 To-Do List (อนาคต)

- [ ] เพิ่ม reCAPTCHA v3
- [ ] เพิ่ม file upload (สำหรับเอกสารประกอบ)
- [ ] สร้าง Thank You page
- [ ] เพิ่ม auto-reply email ให้ผู้ส่ง
- [ ] Analytics tracking สำหรับ form submissions
- [ ] A/B testing สำหรับ conversion optimization

---

## 📞 ติดต่อ

หากมีคำถามหรือปัญหา:
- อ่านคู่มือ `EMAILJS_SETUP.md`
- ตรวจสอบ Browser Console
- ดู EmailJS Documentation: https://www.emailjs.com/docs/

---

**อัปเดตล่าสุด:** October 6, 2025
**Version:** 1.0.0


