// xử lý chuỗi trong javascript
// khai báo, khởi tạo
var str1 = "aADevmaster Academy";
var str2 = new String("Hello World!");
console.log(str1);
console.log(str2);

// sử dụng các phương thức trên đối tượng chuỗi
console.log(str1.charAt(0));
for (let i = 0; i < str1.length; i++) {
    console.log(str1.charAt(i));  
}

console.log(str1.charCodeAt(0));
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());

console.log(str1.replace('a','B'));

console.log(str1.replaceAll('a','B'));
