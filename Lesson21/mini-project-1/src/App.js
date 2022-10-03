import "./App.css";
import { React, Component } from "react";
import Control from "./component/Control";
import ListStudent from "./component/ListStudent";
import Form from "./component/Form";
class App extends Component {
  // tạo bộ dữ liệu cho ListStudent
  constructor(props){
    super(props);
    this.state = {
      students:[
        {studentId:"SV001", studentName:"Nguyễn Văn A",age:20, sex:true, birthDay:"2002-04-23",birthPlace:"Hà nội", address:"25 Vũ Ngọc Phan"},
        {studentId:"SV002", studentName:"Nguyễn Văn B",age:21, sex:false, birthDay:"2002-09-09",birthPlace:"Đà nẵng", address:"1 Ngô Quyền"},
        {studentId:"SV003", studentName:"Nguyễn Văn C",age:19, sex:true, birthDay:"2002-07-07",birthPlace:"Tp. Hồ chí minh", address:"25 Vũ Tông Phan"},
        {studentId:"SV004", studentName:"Nguyễn Văn D",age:19, sex:false, birthDay:"2002-07-07",birthPlace:"Tp. Hồ chí minh", address:"25 Vũ Tông Phan"}
      ],

    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">

              <Control />

              <ListStudent  students = {this.state.students} />

            </div>
          </div>

          <Form />

        </div>
      </div>
    );
  }
}

export default App;
