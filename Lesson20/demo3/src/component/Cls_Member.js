import {React,Component} from 'react';
import Fn_Member from './Fn_Member';
class Cls_Member extends Component{
    // state
    constructor(props){
        super(props);
        // khởi tạo state cho component
        this.state = {
            name:'Chung Trịnh Văn',
            age:45,
            company:"Devmaster Academy"
        };
    }
    // change
    handleChange =()=>{
        this.setState({
            name:'Devmaster Academy',
            age:5,
        });
    }
    render(){
        return(
            <div className='class-member'>
                <h1>Sử dụng class component</h1>
                <p>Xin chào: {this.props.company}</p>
                <hr/>
                {/* Sử dụng dữ liệu trong state  */}
                <h3>Sử dụng dữ liệu trong state </h3>
                <p>Name:{this.state.name}
                    <br/>
                    Age: {this.state.age}
                    <br/>
                    Company: {this.state.company}
                </p>
                <button onClick={this.handleChange}>Change Infor</button>
                <Fn_Member name="ABC" />
            </div>
        );
    }
}

export default Cls_Member;