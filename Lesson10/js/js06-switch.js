// switch case:
// syntax:
/*
    switch(expression){
        case value1:
            statement 1;
            break;
        case value2:
            statement 2;
            break;
        case value3:
            statement 3;
            break;
        ....

        [default:
            statement n;
            break;]
    }
*/
//ex: nhập vào thứ (số: 1...7) trong tuần => in ra tiếng việt

var thu=20;
switch(thu){
    case 1:
        console.log("Chủ nhật");
        break;
    case 2:
        console.log("Thứ hai");
        break;
    case 3:
        console.log("Thứ ba");
        break;
    case 4:
        console.log("Thứ tư");
        break;
    case 5:
        console.log("Thứ năm");
        break;
    case 6:
        console.log("Thứ sáu");
        break;
    case 7:
        console.log("Thứ bảy");
        break;
    default:
        console.log("bạn nhập sai: 1->7");
        break;
}
/*
    1. Nhập vào tháng, năm => in ra số ngày trong tháng năm đó

    2. Nhập vào 1 số có 2 chữ số
        => đọc ra lời việt
        10=> mười
        15=> mười lăm
        25=> hai mươi lăm
        ....
*/