import React from "react";
import {Component} from 'react'

class ClassCompDemo extends Component {
    render(){
        return(
            <div>
                <h1>This is a class component</h1>
                <h2>Hello, {this.props.name} <br/>
                    Welcome to, {this.props.userName}
                </h2>
            </div>
        );
    }
}
export default ClassCompDemo;