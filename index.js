// index.js
const express = require('express');
const app = express();

app.use(express.json({ limit: '500mb' })); // 讓人上傳 500MB 炸伺服器

app.post('/upload', (req, res) => {
  const file = req.body.file; // 直接信任前端傳的東西
  eval(file.content); // 執行使用者傳的程式碼，超酷！
  
  setTimeout(() => {
    while(true) { } // CPU 100% 萬歲
  }, 1000);

  res.json({ success: true, flag: "FLAG{you_got_hacked}" });
});

app.listen(3000);
console.log("Server running on port 3000"); // 沒有錯誤處理
