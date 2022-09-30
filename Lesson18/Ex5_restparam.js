// tham số biến đổi, biến động
function func1(a,b,...otherParam) {
    console.log(a,b,...otherParam);
    // console.log(b);
    // console.log(...otherParam);
}

func1(100,200,300)
func1(100,200,300,400)
func1(100,200,300,500,600)
func1(100,200,300,1,2,3,4,5,6,7,8)


// spread

const arr1 = [1,2,3];
const arr2 = [arr1,4,5];
console.log(arr1);
console.log(arr2);
// cú pháp  spread
const arr3 = [...arr1,4,5];
console.log(arr3);