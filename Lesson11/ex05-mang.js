// mảng trong javascript
// 1. Khai báo, khởi tạo giá trị
var arr = new Array(); // khai báo mảng rỗng
var arr1 = new Array(10,20,15,25,40,30); // khai báo và khởi tạo giá trị cho mảng
// in 
console.log(arr);
console.log(arr1);

// khai báo sử dụng []
var arr2 = [];// khai báo mảng rỗng
var arr3 =["Hùng","Dũng","Sang","Trọng"];
console.log(arr2);
console.log(arr3);

// 2. truy xuất giá trị phần tử trong mảng
console.log(arr2[0]);
console.log(arr2[5]);
console.log(arr3[1]);
// gán giá trị
arr2[0]=100;
arr2[1]=150;
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr3[1]);


// 3. duyệt mảng -  sử dụng cấu trúc lặp: for, while, do..while, foreach
console.log("Danh sách các phần tử trong mảng");
for (let i = 0; i < arr3.length; i++) {
    // const element = array[i];
    console.log(arr3[i]);
}
console.log("Danh sách===");
arr3.forEach(element => {
    console.log(element);
});
console.log("Danh sách===");
arr3.forEach((element,index) => {
    console.log(index,element);
});

//4. các hàm, phương thức thao tác với mảng
// valueOf
var name = arr3.valueOf();
console.log(name);

//push: thêm vào cuối
arr3.push("Devmaster");
console.log(arr3);
// unshift: thêm vào đầu
arr3.unshift("DEV");
console.log(arr3);

// pop: xóa phần tử cuối
arr3.pop();
console.log(arr3);
// shift: xóa phần tử đầu tiên
arr3.shift();
console.log(arr3);

// sort: sắp xếp
console.log(arr1);
arr1.sort();
console.log(arr1);

//reverse
arr1.reverse();
console.log(arr1);

//concat
arr1=arr1.concat(arr3);
console.log(arr1);

// slice
arr1 = arr1.slice(0,6);
console.log(arr1);

// bài tập:
/*
    khởi tạo mảng số nguyên có 10 phần tử
    - sinh ngẫu nhiên các phần tử trong mảng
    - mỗi phần tử là số nguyên có 2 chữ số
    - In ra các phần tử trong mảng
    - Tính tổng các phần tử trong mảng
    - 10'
    -> sử dụng hàm random để sinh giá trị ngẫy nhiên
*/
var mang=[];
tong=0;
for (let i = 0; i < 10; i++) {
    let num =  Math.random()*89 + 10;
    num = Math.floor(num);
    mang[i] =num;
    tong+=mang[i];
}
console.log(mang, "Tong:",tong);
// tìm các phần tử >50
let m1 = mang.filter(x=>x>50);
console.log(m1);
// tim phần tử có giá trị =50
console.log("Giá tri mảng = 50");
m1=mang.find(x=>x==50);
console.log(m1);