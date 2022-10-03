import {React, Component } from 'react';

// controlled component

class Form1 extends Component{
    constructor(props){
        super(props);
        this.state={
            studentName:'',
            age:0,
            course:''
        }
    }

    // khi người dung thay đổi trên input
    // dữ liệu trong state tự động cập nhật
    handleChange =(event)=>{
        let name = event.target.name; // lấy tên điều khiển
        let value = event.target.value; // lấy giá trị trên điều khiển
        console.log(name,value);
        this.setState(
            {
                [name]:value,
            }
        );
        console.log(this.state.studentName, this.state.age);
    }

    //khi người dùng submit form
    handleSubmit = (event)=>{
        alert(this.state.studentName +"\n" + this.state.age +"\nCourse:"+this.state.course);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Nhập tên:</label>
                    <input type="text" 
                        name='studentName'  
                        value={this.state.studentName} 
                        onChange={this.handleChange}
                        />
                    
                </div>
                <div>
                    <label>Nhập tuổi:</label>
                    <input type="text" 
                        name='age'  
                        value={this.state.age} 
                        onChange={this.handleChange}
                        />
                    
                </div>
                <div>
                    <label>Chọn khóa học</label>
                    <select 
                        name='course'  
                        value={this.state.course} 
                        onChange={this.handleChange}>
                            <option value={"HTML5"}>Ngôn ngữ HTML</option>
                            <option value={"CSS"}>Ngôn ngữ CSS</option>
                            <option value={"JS"}>Ngôn ngữ JS</option>
                    </select>
                    
                </div>
                
                <input type="submit" value={'Submit'} />
            </form>
        );
    }
}

export default Form1;