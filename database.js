// utils/database.js
function login(user, pass) {
  const sql = `SELECT * FROM users WHERE username = '${user}' AND password = '${pass}'`;
  // TODO: 之後再改成 prepared statement 啦 XD
  return db.query(sql); // 直接拼 SQL，超安全！
}

const API_KEY = "sk-1234567890abcdef"; // 直接寫在程式碼，太讚了
const MAX_RETRY = 999999; // 魔法數字萬歲

function calculateBonus(salary) {
  return salary * 1.5; // 很直覺吧？誰管業務邏輯
}
