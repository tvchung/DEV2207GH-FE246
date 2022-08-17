/*
    Cấu trúc lặp for => 4 dạng for
*/
// Dạng 1: for đầy đủ
// Cú pháp
/*
    for( init ; Expr_condition ; step ){

        statement;

    }

*/
// ví dụ 1:
// in ra 10 lần chữ Hello Devmaster

console.log("Hello Devmaster");
console.log("Hello Devmaster");
console.log("Hello Devmaster");
console.log("Hello Devmaster");
console.log("Hello Devmaster");
console.log("Hello Devmaster");
console.log("Hello Devmaster");
console.log("Hello Devmaster");
console.log("Hello Devmaster");
console.log("Hello Devmaster");

console.log("====================");
for(let i=0; i<10 ; i++){
    console.log("Hello Devmaster - for");
}

// Dạng 2: for khuyết
// khuyết init
// Cú pháp
/*
    for(  ; Expr_condition ; step ){

        statement;

    }

*/
console.log("Khuyết init: =================");
let i=0;
for( ; i<10 ; i++){
    console.log("Hello Devmaster - for");
}

console.log("Khuyết condition: =================");
for(let i=0 ;  ; i++){
    if(i==10) 
        break;
    console.log("Devmaster Academy - ", i);
}

console.log("Khuyết step: =================");
for(let i=0 ; i<10 ; ){
    console.log("Devmaster Academy - ", i);
    i++;
}

// Dạng 3: for khuyết toàn bộ
/* syntax:

    for( ; ; ){
        statement;
    }
*/
console.log("Khuyết all: =================");
i=0;
for( ; ; ){
    console.log("Devmaster Academy - ", i);
    i++;
    if(i==10)
        break;
}

//Dạng 4: for không thân
/*
    syntax:
        for(init, statement; condition; step, statement);

*/
console.log("for không thân: =================");
for(let i=0 ; i<10 ; console.log("Devmaster Academy - ", i),i++ );

// Bài tập đơn giản:
// input: n=?
// output: in ra các giá số nguyên dương <n 
    // và tính tổng các số chẵn
// 5'
n=10;
tong=0;
for(let i=1; i<n; i++){
    console.log(i);
    if(i%2==0)
        tong +=i;
}
console.log("Tổng: ", tong);