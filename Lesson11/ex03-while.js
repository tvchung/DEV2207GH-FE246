/*
Cấu trúc lặp while
syntax:
    while(condition){

            statement;
            
    }
    - Lặp trong điều kiện đúng

*/
//ex:
n=10;
i=0;
console.log("In ra các số nguyên <=",n);
while(i<=n){
    console.log(i);
    i++;
}
i=2;
console.log("In ra các số nguyên chẵn<=",n);
while(i<=n){
    console.log(i);
    i +=2;
}


// ex:
flag = true;
while(!flag){
    console.log("A");
}
// output: không có gì
// ex:
flag = true;
while(flag = !flag){
    console.log("A");
}
// output: không có gì
// ex:
flag = true;
while(flag){
    console.log("A");
    flag=!flag;
}
// output: A
flag = false;
while(flag){
    console.log("A");
    flag=!flag;
}
// output: không có gì
flag = false;
while(!flag){
    console.log("A====");
}
// output: lặp vô hạn

flag = false;
while(flag=!flag){
    console.log("A====");
}
// output: không có gì
flag = false;
while(!flag){
    console.log("A====");
    flag=!flag;
}
// output: A