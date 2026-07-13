// เรียกใช้งาน Express Framework
// ใช้สำหรับสร้าง Web Server
const express = require('express');

// เรียกใช้งาน path module
// ใช้จัดการเส้นทางไฟล์และโฟลเดอร์
const path = require('path');

// สร้าง Application ของ Express
const app = express();

// เรียกใช้งาน Router
const myRouter = require('./backend/routes/myRouter');


// ==============================
// MIDDLEWARE
// ==============================

// รับข้อมูลจาก Form เช่น input, username, password
app.use(express.urlencoded({ 
    extended: true 
}));

// รับข้อมูล JSON สำหรับ API
app.use(express.json());


// ==============================
// STATIC FILE
// ==============================

// กำหนดโฟลเดอร์ public
// สำหรับ CSS, JavaScript, รูปภาพ
app.use(express.static(
    path.join(__dirname, 'frontend/public')
));


// ==============================
// VIEW ENGINE
// ==============================

// ใช้ EJS Template Engine
app.set('view engine', 'ejs');

// กำหนดตำแหน่งไฟล์ EJS
app.set(
    'views',
    path.join(__dirname, 'frontend/views')
);


// ==============================
// ROUTER
// ==============================

// เชื่อม Router
app.use('/', myRouter);


// ==============================
// START SERVER
// ==============================

// ใช้ PORT จาก Render
// ถ้ารันในเครื่องใช้ 3000
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
