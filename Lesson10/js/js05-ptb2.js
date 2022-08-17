// giải phương trình bậc 2
// a=0; b=2; c=3;

// a=1; b=2; c=3;

// a=1; b=2; c=1;

a=1; b=8; c=3;

if(a==0){ // => ptb1
    if(b==0){
        if(c==0){
            console.log("Vô số nghiệm");
        }else{
            console.log("Vô nghiệm");
        }
    }else{ // a!=0
        console.log("ghiệm:",-c/b);
    }
}else{// a!=0 => ptb2
    // tính delta
    let delta = b*b - 4*a*c;
    // 3 trường hợp: 
    if(delta>0){ // pt có 2 nghiệm
        let x1 = (-b - Math.sqrt(delta))/(2*a);
        let x2 = (-b + Math.sqrt(delta))/(2*a);
        console.log("x1=",x1);
        console.log("x2=",x2);
    }else if(delta == 0){ // pt nghiệm kẹp
        let x= (-b/(2*a));
        console.log("Nghiệm kép x = ",x);
    }else{// delta<0 => vô nghiệm
        console.log("Pt vô nghiệm");
    }
}