// import logo from './logo.svg';
import {React, Component} from 'react';
import './App.css';
import Fn_ChangeState from './component/Fn_ChangeState';
import Form1 from './component/Form1';

class App extends Component {
  
  // arrow function
  eventHandleClick1 = ()=>{
    alert("eventHandleClick1:");
  }
  //normal function
  eventHandleClick2 (){
    alert("eventHandleClick2:");
  }

  eventHandleClick3=(content)=>{
    alert("eventHandleClick3: " + content);
  }

  render(){
    return (
      <div className="App">
        <h1>Event Form</h1> 
        <hr/>
        {/* <button onClick={this.eventHandleClick1()}>Button1</button> */}
        {/* <button onClick={this.eventHandleClick2()}>Button2</button> */}
        {/* <button onClick={()=>this.eventHandleClick2()}>Button2.1</button> */}
        <button onClick={this.eventHandleClick3}>Button3</button>
        {/* <button onClick={this.eventHandleClick3("Devmaster")}>Button4</button> */}
        <button onClick={()=>this.eventHandleClick3("Devmaster Academy")}>Button5</button>

        <hr/>
        <Fn_ChangeState />
        <hr/>
        <h2>Xử lý dữ liệu với form </h2>
        <Form1/>
      </div>
    );
  }
}

export default App;
