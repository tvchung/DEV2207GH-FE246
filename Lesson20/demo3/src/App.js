// import logo from './logo.svg';
import './App.css';

import {React, Component} from 'react';
import Fn_Member from './component/Fn_Member';
import Cls_Member from './component/Cls_Member';

// arrow function
var Member = (props)=>{
  return(
    <div className='member'>
        <h2>Hello, {props.name}</h2>
        <p>Tuổi: {props.age}</p> 
    </div>
  );
}

// normal function
function Fn_Member1(props){
  return(
    <div className='fn_member'>
      <h3>Normal: {props.name}</h3>
    </div>
  );
}

const elementFn = <Fn_Member name="Devmaster" age="5" />;

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Component, props, state </h1>
        <hr/>
        <Member name="Chung Chung" age="45" />
        <hr/>
        {elementFn}
        <Fn_Member name="Academy" age="5" />
        <hr/>
        <Fn_Member1 name="Viện Công Nghệ"/>
        <hr/>
        <Cls_Member company="Cty Devmaster"/>
      </div>
    );
  }
}

export default App;
