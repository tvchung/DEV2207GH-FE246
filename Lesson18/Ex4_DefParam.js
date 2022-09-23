// Tham số mặc định
function add(num1, num2) {
    return num1+num2;
}
var kq = add(100,200);
console.log("Kq:",kq);

function add(num1, num2=20) {
    return num1+num2;
}
var kq = add(100);
console.log("Kq:",kq);

function add(num1, num2) {
    num2 = num2 || 150;
    return num1+num2;
}
var kq = add(100);
console.log("Kq:",kq);

