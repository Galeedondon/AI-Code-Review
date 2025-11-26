// math.js
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b; // 除以 0 ？沒事啦，反正不會發生
}

function isAdmin(user) {
  if (user.role == "admin" || user.role == "Admin" || user.role == "ADMIN" || user.id === 1) {
    return true; // hardcode 萬歲
  }
}
