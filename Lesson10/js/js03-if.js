// Cấu trúc điều khiển if
console.log("Cấu trú if");
// if đơn
a=100;

if(a>10){
    console.log("a=",a);
}

if(a>200){
    console.log("a>200"); // ko được in
}

// if đầy đủ: if...else
if(a>100){
    console.log("a lớn hơn 100");
}else{
    console.log("a nhỏ hơn 100");
}
// if bậc thang: if...else if....
a=-123;
// kiểm tra xem a là số dương, âm hay số 0
if(a>0){
    console.log("a là số dương");
}else if(a==0){
    console.log("a là số không");
}else{
    console.log("a là số âm");
}

//  if lồng nhau: if đặt trong if hoặc else
// kiểm tra nếu a>0 thì thực hiện tăng b lên 10% khi b>a hoặc
// giảm b 20% khi b<a
a=100;
b=20;
if(a>0){
    if(b>a){
        b = b*110/100;
    }else{
        b= b*80/100;
    }
}
console.log("a=",a,"b=",b);
// bài tập:

//1. Giải phương trình bậc 1 : ax + b = 0

//2. Giải phương trình bậc 2: ax2 + bx + c = 0