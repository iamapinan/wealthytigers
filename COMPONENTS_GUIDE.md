# คู่มือระบบ Component Loading

## 📌 สรุป

ระบบนี้ช่วยให้คุณสามารถแก้ไข **header** และ **footer** ที่ใช้ร่วมกันทุกหน้า โดยแก้ไขเพียง**ทีเดียว** แล้วจะมีผลกับทุกหน้าโดยอัตโนมัติ

## 🗂️ โครงสร้างไฟล์

```
WealthyTigers/
├── components/              # โฟลเดอร์เก็บส่วนประกอบที่ใช้ร่วมกัน
│   ├── header.html         # Navigation bar
│   └── footer.html         # Footer
├── assets/
│   └── js/
│       ├── components.js   # Script โหลดคอมโพเนนต์
│       ├── main.js         # JavaScript หลัก
│       └── language.js     # ระบบภาษา
└── [หน้า HTML ต่างๆ]
```

## ✏️ วิธีแก้ไขที่ใช้ร่วมกัน

### แก้ไข Header/Navigation

แก้ไขเพียงไฟล์เดียว: `components/header.html`

```html
<nav class="navbar">
    <div class="container">
        <!-- แก้ไขตรงนี้ จะมีผลทุกหน้า -->
        <div class="nav-brand">
            <img src="assets/images/logo.png" alt="Wealthy Tigers" class="logo">
            <span class="brand-name">Wealthy Tigers</span>
        </div>
        <ul class="nav-menu">
            <li><a href="index.html" class="nav-link" data-page="index">หน้าแรก</a></li>
            <!-- เพิ่มเมนูใหม่ หรือแก้ไขเมนูเดิมได้ที่นี่ -->
        </ul>
    </div>
</nav>
```

### แก้ไข Footer

แก้ไขเพียงไฟล์เดียว: `components/footer.html`

```html
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <!-- แก้ไขตรงนี้ จะมีผลทุกหน้า -->
            <!-- เช่น เปลี่ยนข้อมูลติดต่อ, ลิงก์ social media, ฯลฯ -->
        </div>
    </div>
</footer>
```

## 🆕 วิธีสร้างหน้าใหม่

เมื่อต้องการสร้างหน้าใหม่:

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>หน้าใหม่ - Wealthy Tigers</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/apple-touch-icon.png">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#1a3a52">
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <!-- Header จะโหลดอัตโนมัติ -->
    <div id="header-placeholder"></div>

    <!-- เนื้อหาหน้าของคุณ -->
    <section>
        <div class="container">
            <h1>เนื้อหาของคุณ</h1>
        </div>
    </section>

    <!-- Footer จะโหลดอัตโนมัติ -->
    <div id="footer-placeholder"></div>

    <!-- Scripts (สำคัญ: ต้องเรียงตามลำดับนี้) -->
    <script src="assets/js/components.js"></script>
    <script src="assets/js/language.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>
```

## 🔧 การทำงานของระบบ

1. **components.js** โหลดก่อน - ดึง header และ footer มาแสดงผล
2. **language.js** โหลดตาม - จัดการระบบภาษา
3. **main.js** โหลดสุดท้าย - จัดการฟังก์ชันต่างๆ

## 💡 ข้อดีของระบบนี้

✅ **แก้ที่เดียว มีผลทุกหน้า** - ไม่ต้องแก้ทุกไฟล์
✅ **ง่ายต่อการบำรุงรักษา** - โค้ดไม่ซ้ำซ้อน
✅ **รองรับ Firebase Hosting** - ใช้งานได้ทันทีบน static site
✅ **ไม่ต้องติดตั้งอะไรเพิ่ม** - ใช้แค่ JavaScript ธรรมดา

## 🎯 ตัวอย่างการใช้งาน

### เพิ่มเมนูใหม่

แก้ไข `components/header.html`:

```html
<ul class="nav-menu">
    <li><a href="index.html" class="nav-link">หน้าแรก</a></li>
    <li><a href="about.html" class="nav-link">เกี่ยวกับเรา</a></li>
    <!-- เพิ่มเมนูใหม่ -->
    <li><a href="products.html" class="nav-link">สินค้า</a></li>
</ul>
```

บันทึกไฟล์ แล้วรีเฟรชหน้าเว็บ → เมนูใหม่จะปรากฏทุกหน้าทันที! 🎉

### เปลี่ยนข้อมูลติดต่อ

แก้ไข `components/footer.html`:

```html
<div class="contact-info">
    <p><i class="fas fa-envelope"></i> newemail@wealthytigers.com</p>
    <p><i class="fas fa-phone"></i> 02-xxx-xxxx</p>
    <p><i class="fas fa-map-marker-alt"></i> Bangkok, Thailand</p>
</div>
```

บันทึกไฟล์ → ข้อมูลติดต่อใหม่จะปรากฏใน footer ทุกหน้า! 🎉

## 🐛 Troubleshooting

### ไม่แสดง header/footer

1. เช็คว่ามี `<div id="header-placeholder"></div>` และ `<div id="footer-placeholder"></div>` ในหน้า HTML หรือไม่
2. เช็คว่าเรียก `<script src="assets/js/components.js"></script>` ก่อน script อื่นๆ
3. เปิด Console ใน Browser (F12) เพื่อดู error

### เมนู active ไม่ถูกต้อง

ระบบจะเซ็ต active class อัตโนมัติตาม URL ของหน้าปัจจุบัน ไม่ต้องตั้งค่าเอง

### ระบบภาษาไม่ทำงาน

ตรวจสอบว่า `language.js` โหลดหลังจาก `components.js` และมี `data-i18n` attributes ใน HTML

## 📝 หมายเหตุ

- ไฟล์ใน `components/` เป็นไฟล์ HTML ธรรมดา ไม่มีแท็ก `<html>`, `<head>`, `<body>`
- แก้ไขอะไรก็ได้ แค่บันทึกไฟล์แล้วรีเฟรช
- รองรับ data attributes ทั้งหมด เช่น `data-i18n` สำหรับระบบภาษา

## 🚀 Deploy

เมื่อ deploy ไปยัง Firebase Hosting หรือ hosting อื่นๆ:

```bash
# ตรวจสอบให้แน่ใจว่า components/ ถูก include ไปด้วย
firebase deploy
```

ไฟล์ทั้งหมดรวมถึง `components/` จะถูก upload และใช้งานได้ทันที!

---

**สร้างโดย:** Component Loading System สำหรับ Wealthy Tigers
**อัพเดทล่าสุด:** October 2025

