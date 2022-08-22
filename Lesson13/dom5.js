// đối tượng trong javascript
console.log("Đối tượng trong javascript");
// Khai báo đối tượng bằng Object
var emp = new Object();
// Thuộc tính
emp.fullName="Chung Trịnh";
emp.age = 45;
emp.address="25 Vũ Ngọc Phan";

// in đối tượng
console.log(emp);

// Phương thức
emp.setInfor = function(fullName,age, address){
    this.fullName=fullName;
    this.age = age;
    this.address = address;
}
emp.printInfor = function(){
    console.log("FullName:" + this.fullName);
    console.log("Age:" + this.age);
    console.log("Address:" + this.address);
}

// sử dụng phương thức
emp.setInfor("Devmaster",5,"RITM-25 Vũ Ngọc Phan");
console.log("Print Infor");
emp.printInfor();


console.log("{}==============");
// sử dụng {}
var student = {
    // khai báo các thuộc tính
    id:0,
    name:'',
    age:0,
    // định nghĩa các phương thức hoạt động
    addInfor : function(id, name, age){
        this.id=id;
        this.name=name;
        this.age=age;
    },

    printInfor:function(){
        console.log("id:" + this.id);
        console.log("Name:" + this.name);
        console.log("age:" + this.age);
    }
}
// sử dụng thuộc tính
student.id=100;
student.name="Chung Trịnh";
student.age=50
// sử dụng phương thức
student.printInfor();
console.log("---method addInfor");
student.addInfor(101,"Devmaster",5);
student.printInfor();

console.log("---method addInfor");
student.addInfor(102,"Academy",5);
student.printInfor();

// Tạo mảng đối tượng
console.log("// Tạo mảng đối tượng");
arr = [];
student.addInfor(200,"Devmaster",5);
arr[0] = student;
student.addInfor(201,"Devmaster 1",5);
arr[1] = student;
student.addInfor(202,"Devmaster 2",5);
arr[2] = student;

console.log(arr);

// Tạo mảng đối tượng
console.log("// Tạo mảng đối tượng");
arr = [];
let a=student.addInfor(200,"Devmaster",5);
arr[0] = a;
let b= student.addInfor(201,"Devmaster 1",5);
arr[1] = b;
let c= student.addInfor(202,"Devmaster 2",5);
arr[2] = c;

console.log(arr);

// ==>> hồi sau sẽ rõ
