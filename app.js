// ==============================
// IMPORT MODULE
// ==============================

// เรียกใช้งาน Express Framework
// ใช้สำหรับสร้าง Web Server
const express = require('express');

// เรียกใช้งาน path module
// ใช้จัดการเส้นทางไฟล์และโฟลเดอร์
const path = require('path');


// ==============================
// CREATE APP
// ==============================

// สร้าง Application ของ Express
// app จะเป็นตัวหลักในการจัดการเว็บ
const app = express();


// ==============================
// PORT
// ==============================

// กำหนด Port ที่ Server จะทำงาน
// เปิดเว็บผ่าน localhost:3000
const PORT = 3000;


// ==============================
// IMPORT ROUTER
// ==============================

// เรียกใช้งาน Route
// ไปดึงไฟล์ myRouter.js จากโฟลเดอร์ backend/routes
const myRouter = require('./backend/routes/myRouter');


// ==============================
// MIDDLEWARE
// ==============================

// ใช้รับข้อมูลจาก Form
// เช่น input, username, password
// เมื่อ submit form จะอ่านค่าได้ผ่าน req.body
app.use(express.urlencoded({ extended: true }));


// ใช้รับข้อมูลรูปแบบ JSON
// เหมาะสำหรับ API หรือ Frontend ส่งข้อมูลมา
app.use(express.json());


// ==============================
// STATIC FILE
// ==============================

// กำหนดโฟลเดอร์ public
// เพื่อให้สามารถเรียกใช้งาน
// CSS, JavaScript, รูปภาพ ได้
//
// ตัวอย่าง:
// /css/style.css
// /js/script.js
// /images/logo.png
app.use(
    express.static(
        path.join(__dirname, 'frontend/public')
    )
);


// ==============================
// VIEW ENGINE
// ==============================

// กำหนดให้ระบบใช้ EJS
// สำหรับสร้างหน้าเว็บ
app.set('view engine', 'ejs');


// กำหนดตำแหน่งเก็บไฟล์ .ejs
// ระบบจะไปหาไฟล์ใน frontend/views
app.set(
    'views',
    path.join(__dirname, 'frontend/views')
);


// ==============================
// ROUTE
// ==============================

// เชื่อม Router เข้ากับระบบ
//
// '/' หมายถึงหน้าแรกของเว็บไซต์
//
// เมื่อมีการเปิด URL
// localhost:3000
//
// ระบบจะไปทำงานที่ myRouter.js
app.use('/', myRouter);


// ==============================
// START SERVER
// ==============================

// เปิด Server ให้ทำงานที่ Port 3000
// เมื่อรันสำเร็จจะแสดงข้อความใน Terminal
app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});