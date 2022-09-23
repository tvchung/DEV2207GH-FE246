// phá vỡ cấu trúc

const arr = [1,2,3,4,5,6];
const [a,b]=arr;

console.log(arr);
console.log("a=",a,"b=",b);


//object
const obj ={
    name:'Devmaster Academy',
    age:5,
    address:'25 Vũ Ngọc Phan'
}

console.log(obj);
const {name, age}=obj;

console.log("Name:",name);
console.log("Age:",age);
