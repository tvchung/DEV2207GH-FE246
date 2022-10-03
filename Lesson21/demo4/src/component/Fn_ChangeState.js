import {React, Component } from 'react';
class Fn_ChangeState extends Component{

    constructor(props){
        super(props);
        this.state={
            name:'Devmaster',
            age:5
        }
    }

    changeState = ()=>{
        // thay đổi, cập nhật state
        this.setState(
            {
                name:'Chung Chuung',
                age:45
            }
        );

        alert("Welcome to, " + this.state.name + "\n age:" + this.state.age);
    }
    render(){
        return(
            <div>
                <button onClick={this.changeState}>Change State</button>
            </div>
        );
    }
}

export default Fn_ChangeState;