import {React,Component} from 'react';
function Fn_Member(props){
    return(
        <div className='member'>
            <h2>Welcome, {props.name}</h2>
            <p>Tuổi: {props.age}</p>
        </div>
    );
}
export default Fn_Member;