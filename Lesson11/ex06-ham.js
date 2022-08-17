// khái niệm hàm trong javascript
// Khai báo, định nghĩa hàm
// hàm không có tham số, không có giá trị trả về xác định
function display(){
    console.log("Welcome to, Devmaster");
}
// sử dụng 
display();

// Hàm không có tham số, có giá trị trả về xác định
//. return
function show(){
    return "Hello world";
}
// sử dụng
console.log(show());
let a=show();
console.log(a);

// hàm có tham số
function tinh(a,b){
    c=a+b;
    console.log(a +"+" + b +"=" + c);
}
tinh(10,20);

function tong(a,b){
    c=a+b;
    return c;
}

kq=tong(100,200);
console.log(kq);

// tham số tùy chọn
function add(a=100,b=200){
    c=a+b;
    console.log(a +"+" + b +"=" + c);
}
add();
add(1000,2000);

function add(a,b=200){
    c=a+b;
    console.log(a +"+" + b +"=" + c);
}
add(125);
/*
function add(a=200,b){
    c=a+b;
    console.log(a +"+" + b +"=" + c);
}
add(125,100);
*/
// tham số biến đổi (biến động)
function sum(...list){
    console.log("---------------");
    let tong=0;
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        console.log(element);
    }
    
}
sum(10);
sum(10,20);
sum(10,20,30);
sum(10,20,30,55);
sum(10,20,30,40,50);

// arrow function
const sum1 = (...list)=>{
    console.log("sum1=====");
    let tong=0;
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        console.log(element);
    }
}
sum1(100);
sum1(100,200,400,500);
sum1(100,359);

var print = ()=>{
    console.log('Xin chào ABC');
}

print();

// bt: kiểm tra số nguyên dương n có phải là số nguyên tố hay không?
// xây dựng đơn vị hàm
/*
    input: num
    output: return true/false ; return 1/0

*/
const checkNumNT=(num)=>{
    let flag=true; // giả sử num là số nguyên tố
    if(num==1) {
        return false;
    }
    for (let i = 2; i <=num/2; i++) {
        if(num % i == 0){
            flag=false;
            break;
        }
    }
    return flag;
};
// test
console.log(checkNumNT(2));
console.log(checkNumNT(4));
console.log(checkNumNT(7));