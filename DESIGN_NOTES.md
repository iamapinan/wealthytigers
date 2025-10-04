# Design Notes - Wealthy Tiger Website

## Typography / ฟอนต์

### เกี่ยวกับการเลือกฟอนต์

**หมายเหตุสำคัญ**: Zalando Sans เป็นฟอนต์ที่เป็นลิขสิทธิ์ของบริษัท Zalando และไม่สามารถใช้งานได้อย่างเสรีจาก Google Fonts

ดังนั้นเราจึงเลือกใช้ **Barlow** ซึ่งเป็นฟอนต์ที่:
- มีสไตล์ทันสมัยและเป็นมืออาชีพ คล้ายกับ Zalando Sans
- รองรับภาษาไทยได้ดี
- ดาวน์โหลดฟรีจาก Google Fonts
- มีความหลากหลายของ font weights (300-800)
- เหมาะสำหรับเว็บไซต์องค์กร

### ทางเลือกฟอนต์อื่นๆ (ถ้าต้องการเปลี่ยน)

หากต้องการเปลี่ยนฟอนต์ สามารถเลือกจากฟอนต์ที่คล้ายกันได้:

1. **Public Sans** - https://fonts.google.com/specimen/Public+Sans
2. **Inter** - https://fonts.google.com/specimen/Inter  
3. **Nunito Sans** - https://fonts.google.com/specimen/Nunito+Sans
4. **DM Sans** - https://fonts.google.com/specimen/DM+Sans
5. **Work Sans** - https://fonts.google.com/specimen/Work+Sans

### วิธีเปลี่ยนฟอนต์

1. เปลี่ยน Google Fonts link ในไฟล์ HTML ทั้งหมด:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

2. อัพเดต CSS ใน `assets/css/style.css`:
```css
body {
    font-family: 'YOUR_FONT', sans-serif;
}
```

## Color Palette / สีที่ใช้

สีทั้งหมดถูกเลือกจากโลโก้ Wealthy Tiger:

### Primary Colors (สีหลัก)
- **Navy Blue**: `#1a3a52` - สีน้ำเงินเข้มจากส่วนหัวเสือในโลโก้
- **Dark Blue**: `#0f2738` - สีน้ำเงินเข้มกว่าสำหรับ contrast
- **Bronze/Copper**: `#b8856a` - สีทองแดงจากเส้นเรขาคณิตในโลโก้

### Supporting Colors (สีรอง)
- **Text Primary**: `#333333` - สีข้อความหลัก
- **Text Secondary**: `#666666` - สีข้อความรอง  
- **Text Light**: `#999999` - สีข้อความอ่อน
- **Background Light**: `#f8f9fa` - พื้นหลังสีอ่อน
- **White**: `#ffffff` - สีขาว

### การใช้งานสี

```css
/* ปุ่มหลัก */
.btn-primary {
    background: var(--primary-color);  /* Navy Blue */
    color: var(--white);
}

/* สีเน้น / Highlights */
.highlight {
    color: var(--accent-color);  /* Bronze/Copper */
}

/* พื้นหลังส่วน Hero */
.hero {
    background: linear-gradient(135deg, #1a3a52 0%, #0f2738 100%);
}
```

## Logo Usage / การใช้โลโก้

### ขนาดโลโก้
- **Navigation**: 40x40px
- **Footer**: 50x50px

### CSS สำหรับโลโก้
```css
.logo {
    width: 40px;
    height: 40px;
    object-fit: contain;  /* รักษาอัตราส่วนของโลโก้ */
}
```

### หมายเหตุ
- โลโก้ไม่ควรมี background gradient เพิ่มเติม เพราะโลโก้มีสีอยู่แล้ว
- ใช้ `object-fit: contain` เพื่อรักษาอัตราส่วน
- รองรับไฟล์ .png และ .svg

## Responsive Design

เว็บไซต์ถูกออกแบบให้รองรับทุกขนาดหน้าจอ:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px  
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## Design Principles

1. **Clean & Professional** - ดีไซน์สะอาด เป็นมืออาชีพ
2. **Brand Consistency** - สอดคล้องกับแบรนด์ผ่านโลโก้และสี
3. **User-Friendly** - ใช้งานง่าย นำทางชัดเจน
4. **Performance** - โหลดเร็ว ประสิทธิภาพดี
5. **Accessibility** - เข้าถึงได้สำหรับทุกคน

## Browser Compatibility

เว็บไซต์ทดสอบและรองรับ:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- ใช้ Google Fonts display=swap สำหรับ font loading
- CSS optimized with CSS custom properties
- Minimal JavaScript dependencies
- Optimized images (ควรเป็น WebP format)

---

สร้างโดย: Wealthy Tiger Development Team  
อัพเดทล่าสุด: 2024

