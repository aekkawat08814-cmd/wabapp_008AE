const express = require('express');
const router = express.Router();

// หน้าแรก
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/page2', (req, res) => {
    res.render('page2');
});

// ส่งออก router เพื่อให้ไฟล์อื่นสามารถนำไปใช้งานได้
module.exports = router