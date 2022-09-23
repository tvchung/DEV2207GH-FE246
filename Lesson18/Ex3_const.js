// Khai báo biến hằng
const x=1000;
console.log("Bên ngoài x = ",x);
const func1 = function(){
    console.log('bên trong x=',x);
    // const x = 2000;
    // console.log("Kb lai x = ",x);
}

func1();

// x=2000; // error
// console.log("X=",x);
