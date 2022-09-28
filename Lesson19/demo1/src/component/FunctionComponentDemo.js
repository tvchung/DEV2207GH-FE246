import React from 'react';
function FunCompDemo(props){
    return(
        <div>
            <h1>This is a Function Component</h1>
            <p>Hello, <b>{props.userName} </b> </p>
            <p>Welcome to, <b> {props.name} </b></p>
            <h2>{props.company}</h2>
        </div>
    );
}

export default FunCompDemo;