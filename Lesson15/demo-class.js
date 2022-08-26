/*
    * syntax:
    class TenLop{

        // Khai báo các thuộc tính

        // Hàm khởi tạo
        constructor(...){}

        // getter / setter
        
        
        // Method

    }

    * Khởi tạo đối tượng từ lớp
    var obj = new TenLop(...);
    
    * truy cập đến các thuộc tính, phương thức của đối tượng
    obj.tenthuoctinh = ?
    
    obj.tenphuongthuc();

*/

class Person{
    // name="";
    // age=0;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    // getter | setter
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }

    getAge(){
        return this.age;
    }
    setAge(age){
        this.age=age;
    }

    // method
    printPerson = ()=>{
        console.log("========Thông tin:");
        console.log("Name:", this.getName());
        console.log("Age:", this.getAge());
    }
}

// khởi tạo đối tượng từ lớp
var obj = new Person("Devmaster",5);
obj.printPerson();

obj.setName("Chung Trịnh");
obj.setAge(45);
obj.printPerson();

// tạo mảng đối tượng person
var arr =[
    new Person("Hùng",70),
    new Person("Dũng",75),
    new Person("Sang",70),
    new Person("Trọng",87)
];
console.log(arr);

arr.forEach(elem=>{
    elem.printPerson();
});