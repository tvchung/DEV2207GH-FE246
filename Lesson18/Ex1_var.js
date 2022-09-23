var x = 100;
function VariableDemo(){
    console.log("Bên trong hàm x = " + x);
}

VariableDemo();
console.log("Bên ngoài hàm x=",x);

function VariableDemo1(){
    var y = 200;
    console.log('Bên trong hàm:',y);
}
VariableDemo1();
console.log("Bên ngoài hàm y =",y);

var x=1000;
console.log("x=",x);