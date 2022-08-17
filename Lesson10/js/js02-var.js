// Khai báo
var name; // khai báo
age=5; // khai báo và gán giá trị
// gán giá trị cho biến name 
name="Devmaster Academy";

// in giá trị 
console.log(name);
console.log(age);
console.log("Welcome to, ", name , age);

// alert('hello');

// Các phép toán số học 
// *; /; +; -; %; ++; --
a=125;
b=100;
console.log("a=",a,"b=",b);
c=a*b;
console.log(c);
c=a/b;
console.log(c);
c=a+b;
console.log(c);
c=a-b;
console.log(c);
c=a%b;
console.log(c);
a++;
console.log(a);
c=a++;
console.log(c);
c=++a;
console.log(c);

// phép toán so sánh 
// ==; ===; >; >=; <; <=; !=

a=125;
b=25;
c = a>b;
console.log(c);
c = a<b;
console.log(c);

a=100;
b="100";
c=a==b;
console.log(c);
c=a===b;
console.log(c);

a=100;
b=100.00;

c=a==b;
console.log(c);
c=a===b;
console.log(c);

console.log(typeof(a),typeof(b))

a=100;
b="100";
console.log(typeof(a),typeof(b))

// logic
a=150;
b=100.00;
console.log("a=",a,"b=",b);
c = a>100 && b<200;
console.log(c);
c = a>100 || b<200;
console.log(c);
c = !(a>100);
console.log(c);

c = a>100 & b<200;
console.log(c);