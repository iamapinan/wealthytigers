# Wealthy Tiger - Firebase Hosting Deployment Guide

คู่มือการติดตั้งเว็บไซต์ Wealthy Tiger บน Firebase Hosting

## ข้อกำหนดเบื้องต้น (Prerequisites)

1. **Node.js และ npm** - ติดตั้ง Node.js (แนะนำเวอร์ชัน 16 ขึ้นไป)
   - ดาวน์โหลดได้จาก: https://nodejs.org/
   - ตรวจสอบการติดตั้ง: `node --version` และ `npm --version`

2. **Firebase Account** - สร้างบัญชี Google/Firebase
   - เข้าไปที่: https://firebase.google.com/

## ขั้นตอนการติดตั้ง

### 1. ติดตั้ง Firebase CLI

```bash
npm install -g firebase-tools
```

ตรวจสอบการติดตั้ง:
```bash
firebase --version
```

### 2. เข้าสู่ระบบ Firebase

```bash
firebase login
```

คำสั่งนี้จะเปิดเบราว์เซอร์ให้คุณเข้าสู่ระบบด้วย Google Account

### 3. สร้าง Firebase Project

มี 2 วิธี:

#### วิธีที่ 1: ผ่าน Firebase Console (แนะนำ)
1. เข้าไปที่ https://console.firebase.google.com/
2. คลิก "Add project"
3. ตั้งชื่อโปรเจค เช่น "wealthytiger"
4. ทำตามขั้นตอนจนเสร็จสิ้น

#### วิธีที่ 2: ผ่าน Command Line
```bash
firebase projects:create wealthytiger
```

### 4. เชื่อมต่อโปรเจคกับ Firebase

อัพเดตไฟล์ `.firebaserc` ด้วย Project ID ของคุณ:

```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

หรือใช้คำสั่ง:
```bash
firebase use --add
```

### 5. ทดสอบเว็บไซต์ Local (Optional)

ก่อน Deploy สามารถทดสอบในเครื่องได้:

```bash
firebase serve
```

เปิดเบราว์เซอร์ที่ http://localhost:5000

### 6. Deploy เว็บไซต์

```bash
firebase deploy
```

หรือ Deploy เฉพาะ Hosting:
```bash
firebase deploy --only hosting
```

### 7. ดูผลลัพธ์

หลัง Deploy สำเร็จ คุณจะได้ URL เช่น:
```
https://your-project-id.web.app
https://your-project-id.firebaseapp.com
```

## คำสั่งที่ใช้บ่อย

### Deploy เว็บไซต์
```bash
firebase deploy
```

### ดูรายการ Firebase Projects
```bash
firebase projects:list
```

### ดูสถานะปัจจุบัน
```bash
firebase status
```

### เปลี่ยน Project
```bash
firebase use project-id
```

### ดู Deployment History
```bash
firebase hosting:channel:list
```

### Rollback (ย้อนกลับเวอร์ชันเดิม)
```bash
firebase hosting:clone source-project-id:source-site-id target-project-id:target-site-id
```

## Custom Domain

### เพิ่ม Custom Domain
1. เข้าไปที่ Firebase Console
2. Hosting > Add custom domain
3. ทำตามขั้นตอน (อัพเดต DNS records)

หรือใช้คำสั่ง:
```bash
firebase hosting:sites:create your-domain-name
```

## การตั้งค่า HTTPS

Firebase Hosting จะจัดการ SSL Certificate ให้อัตโนมัติผ่าน Let's Encrypt

## ข้อมูลเพิ่มเติม

### โครงสร้างไฟล์สำคัญ

```
WealthyTigers/
├── firebase.json          # การตั้งค่า Firebase
├── .firebaserc           # Project configuration
├── .firebaseignore       # ไฟล์ที่ไม่ต้อง deploy
├── index.html            # หน้าแรก
├── about.html            # เกี่ยวกับเรา
├── contact.html          # ติดต่อเรา
├── partnership.html      # ความร่วมมือ
├── assets/
│   ├── css/
│   │   └── style.css     # Stylesheet หลัก (ใช้ Barlow font)
│   ├── js/
│   │   ├── main.js
│   │   └── contact.js
│   └── images/
│       └── logo.png      # โลโก้ (สีน้ำเงินเข้ม #1a3a52 และทองแดง #b8856a)
└── services/
    ├── import-distribution.html
    ├── wholesale-retail.html
    └── authorized-distributor.html
```

### สีและฟอนต์

- **ฟอนต์**: Barlow จาก Google Fonts
- **สีหลัก**: 
  - Navy Blue: `#1a3a52`
  - Bronze/Copper: `#b8856a`
  - Dark Blue: `#0f2738`

### แก้ไขปัญหาที่พบบ่อย

**ปัญหา: Firebase command not found**
```bash
npm install -g firebase-tools
```

**ปัญหา: Permission denied**
```bash
sudo npm install -g firebase-tools
```

**ปัญหา: Deploy ไม่สำเร็จ**
- ตรวจสอบ firebase.json
- ตรวจสอบว่าเข้าสู่ระบบแล้ว: `firebase login:list`
- ตรวจสอบว่าเลือก project แล้ว: `firebase use`

**ปัญหา: Website ไม่แสดงผล**
- ตรวจสอบว่า index.html อยู่ใน root directory
- ตรวจสอบ path ของ assets ใน HTML files

## การอัพเดทเว็บไซต์

เมื่อต้องการอัพเดทเนื้อหา:

1. แก้ไขไฟล์ HTML, CSS, JS
2. ทดสอบ local: `firebase serve`
3. Deploy: `firebase deploy`

## การสำรอง (Backup)

แนะนำให้ใช้ Git สำหรับ version control:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

## ทรัพยากรเพิ่มเติม

- Firebase Hosting Documentation: https://firebase.google.com/docs/hosting
- Firebase CLI Reference: https://firebase.google.com/docs/cli
- Barlow Font: https://fonts.google.com/specimen/Barlow

## ติดต่อสอบถาม

หากมีปัญหาในการติดตั้ง ติดต่อทีมพัฒนาได้ที่:
- Email: tech@wealthytiger.co.th
- Website: https://wealthytiger.co.th

