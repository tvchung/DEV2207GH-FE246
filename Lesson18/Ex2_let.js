// khai báo biến với từ let
// => Dùng khai báo cho biến cục bộ
let x=100;
function LetDemo1(){
    let x=200;
    console.log("Bên trong x = ",x);
}

LetDemo1();
console.log("Bên ngoài x=",x);
// let x=500;
// console.log("lại x=",x);