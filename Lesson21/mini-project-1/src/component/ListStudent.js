import { React, Component } from "react";
import Student from "./Student";
class ListStudent extends Component {
  render() {
    // lấy dự liệu từ App chuyển xuống (students)
    // let student = this.props.students;
    
    let {students} = this.props;
    let elementStudent = students.map((st,index)=>{
        return <Student student = {st} stt={index+1}  />;
    });
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {/* <Student />
              <Student />
              <Student /> */}
              {elementStudent}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListStudent;
