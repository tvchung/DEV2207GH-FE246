// cấu trúc lặp trong tập hợp
var arr =["Devmaster","Academy","Lập trình"];
console.log("Danh sách");
for(let i in arr){
    console.log(i, arr[i]);
}

// đối tượng
var obj ={
    id:123456,
    "Name":"Devmaster",
    "type":"Học lập trình",
}
for(let i in obj){
    console.log(obj[i]);
}


// forEach
console.log("forEach============");
arr.forEach(x => {
    console.log(x);
});

// bài tập: phần tự thực hành 05.01 