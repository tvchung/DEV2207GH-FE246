// normal function
function  fn_1 (params) {
    console.log(params);
}

fn_1("Chung Trịnh");

// arrow function

const fn_2=(params)=>{
    console.log(params);
}
fn_2("Devmaster");

const fn_3=(...params)=>{
    console.log(...params);
}
fn_3("Devmaster");
fn_3("Devmaster","Academy");