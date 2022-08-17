/* cấu trúc lặp do...while
- lặp trong điều kiện đúng
- thực hiện câu lệnh => kiểm tra điều kiện

syntax:
    do{

        statement;
        
    }while(condition);

*/
// in các giá trị số nguyên dương <n;
n=20;
i=0;
do{
    console.log(i);
    i++;
}while(i<n);

// in các số chẵn
console.log(" in các số chẵn");
i=2;
do{
    console.log(i);
    i+=2;
}while(i<n);