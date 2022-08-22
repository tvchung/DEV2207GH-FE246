// demo regular expression
// biểu thức quy tắc
var regx = /[abc]/i;

kq = regx.test("Chung Trịnh");
console.log(kq);

regx = /^[abc]$/i;

kq = regx.test("Chung Trịnh");
console.log(kq);

regx = /^[abc]+$/i;

kq = regx.test("Chung Trịnha");
console.log(kq);


regx = /^[abc]+$/i;

kq = regx.test("ccaabb");
console.log("4.", kq);

kq = regx.test("a");
console.log(kq);
kq = regx.test("b");
console.log(kq);
kq = regx.test("c");
console.log(kq);

regx = /^[abc]$/i;

kq = regx.test("ccccabd");
console.log(kq);
kq = regx.test("ccccab");
console.log(kq);

regx = /^[a-z]+$/i;
kq = regx.test("ccccab");
console.log(kq);

kq = regx.test("ccccab1");
console.log(kq);

// ---email
// abc@gmai.com
regx = /^[a-z]+[@][a-z]+[.][a-z]{3}$/;
kq =regx.test("chung@gmai.com");
console.log("1. ",kq);
kq =regx.test("chung@gmai.comm");
console.log("2. ",kq);
kq =regx.test("chung@gmai.azx");
console.log("3. ",kq);
kq =regx.test("Chung@gmai.azx");
console.log("4. ",kq);
regx = /^[a-z]+[@][a-z]+[.][a-z]{3}$/i;
kq =regx.test("Chung@gmai.azx");
console.log("4. ",kq);

console.log("================");
regx = /^[a-z]+[@][a-z]+[.][a-z]{2,4}$/i;
kq =regx.test("Chung@gmai.vn");
console.log("1. ",kq);
kq =regx.test("Chung@gmai.azx");
console.log("2. ",kq);
kq =regx.test("Chung@gmai.info");
console.log("3. ",kq);

regx =/^[a-zA-Z0-9_]+[.]*[a-zA-Z0-9_]+[@][gmail][.][a-z]{2,4}$/i;
kq = regx.test("Chu.ng@gmai.vn");
console.log("1." , kq);
kq = regx.test("Chu.ng@gmail.vn");
console.log("2." , kq);

// -- test gmail 
regx =/^[@][gmail]$/i;
kq=regx.test("@gmail");
console.log("1.",kq);