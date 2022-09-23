// lớp đối tượng

class Person{
    // phương thức khởi tạo
    constructor(){
        this.name='Devmaster',
        this.age=5
    }

    // getter / setter
    setName(name){
        this.name=name;
    }
    setAge(age){
        this.age=age;
    }
    
    // Phương thức
    printInfor = ()=>{
        console.log("Welcome to, " + this.name);
        console.log("Age:",this.age);
    }
}

// Khởi tạo đối tượng
var person = new Person();
person.printInfor();
person.setName("Chung Trịnh");
person.setAge(45);
person.printInfor();


// Lớp kế thừa
class Student extends Person{
    constructor(name,age,studentId){
        super(name,age);
        this.studentId=studentId;
    }

    printStudent = ()=>{
        console.log("Mã số: " + this.studentId);
        this.printInfor();
    }
}

var student = new Student();
student.printStudent();

var student = new Student("Chung TV",45,12345);
student.printStudent();