# Wealthy Tiger - Corporate Website

เว็บไซต์สำหรับบริษัท Wealthy Tiger ซึ่งเป็นผู้ให้บริการด้านการนำเข้าและจัดจำหน่ายสินค้าครบวงจร

## ภาพรวมของธุรกิจ

Wealthy Tiger ได้รับความไว้วางใจจากเจ้าของแบรนด์ทั้งในและต่างประเทศ ให้เป็น Authorized Distributor และ Exclusive Distributor ในประเทศไทย

## บริการหลัก

1. **Import & Distribution** - การนำเข้าและจัดจำหน่ายแบบครบวงจร
2. **Wholesale & Retail Solution** - โซลูชันค้าส่งและค้าปลีกครบวงจร
3. **Authorized / Exclusive Distributor** - ตัวแทนจำหน่ายอย่างเป็นทางการ

## โครงสร้างเว็บไซต์

```
/
├── index.html                    # หน้าหลัก
├── about.html                   # เกี่ยวกับเรา
├── contact.html                 # ติดต่อเรา
├── partnership.html             # ความร่วมมือ
├── services/
│   ├── import-distribution.html
│   ├── wholesale-retail.html
│   └── authorized-distributor.html
├── assets/
│   ├── css/
│   │   └── style.css           # CSS หลัก
│   ├── js/
│   │   ├── main.js            # JavaScript หลัก
│   │   └── contact.js         # JavaScript สำหรับหน้า Contact
│   └── images/
│       └── logo.png           # โลโก้บริษัท
└── README.md                   # เอกสารนี้
```

## คุณสมบัติ

- **Responsive Design** - รองรับทุกอุปกรณ์
- **Modern UI/UX** - ออกแบบทันสมัยและใช้งานง่าย
- **Interactive Elements** - การโต้ตอบที่ลื่นไหล
- **Contact Form** - ฟอร์มติดต่อพร้อม validation
- **FAQ Section** - คำถามที่พบบ่อย
- **SEO Optimized** - เพิ่มประสิทธิภาพสำหรับ SEO

## เทคโนโลยี

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Barlow)

## การติดตั้งและใช้งาน

### ทดสอบ Local
1. Clone หรือดาวน์โหลดโปรเจกต์
2. เปิดไฟล์ `index.html` ในเว็บเบราว์เซอร์
3. หรือใช้ local server เช่น Live Server ใน VS Code

### Deploy บน Firebase Hosting
ดูรายละเอียดใน [DEPLOYMENT.md](DEPLOYMENT.md)

## การปรับแต่ง

### สี (Color Scheme)
สีที่ใช้ตามโลโก้ Wealthy Tiger:
```css
:root {
    --primary-color: #1a3a52;    /* Navy Blue (สีน้ำเงินเข้มจากโลโก้) */
    --secondary-color: #0f2738;  /* Dark Blue (สีน้ำเงินเข้มกว่า) */
    --accent-color: #b8856a;     /* Bronze/Copper (สีทองแดงจากโลโก้) */
}
```

### ข้อมูลติดต่อ
แก้ไขข้อมูลติดต่อในไฟล์ HTML ตามต้องการ:
- เบอร์โทรศัพท์
- อีเมล
- ที่อยู่

### เนื้อหา
เนื้อหาสามารถแก้ไขได้ตรงใน HTML files ตามต้องการ

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## การพัฒนาต่อ

สามารถพัฒนาเพิ่มเติมได้ในส่วนต่างๆ เช่น:
- เพิ่มระบบ CMS
- เชื่อมต่อกับ API
- เพิ่มระบบ Authentication
- เพิ่มระบบ Analytics

## License

© 2024 Wealthy Tiger. All rights reserved.
