import React from "react";
import Styled from "styled-components";

export default function Register(props) { 
    const btnStyle = { 
        backgroundColor: "green",
        color:"white",
    };
    let btntext ,passBoxType;
    if (props.showpass === true){ 
        btnStyle.backgroundColor= "Red";
        btntext = "Hide password";
        passBoxType = "text";
    }else { 
        btntext = "show password";
        passBoxType = "password";
    }
    const StyledButton = Styled.Button` 
    display:block; 
    padding:10px 5px; 
    background-color:orange;
    `;
    return (
    <div className ="container card p-3 mt-2 register-container"> 
    <h1 className="text-center">Registration form</h1>
        <form onSubmit={props.submit}> 
            
        <div className = "from-group">  
                <label htmlfor="name">Name</label>
                <input type ="text" name="name"required className="from-control"></input>
            </div>

            <div className = "from-group">  
                <label htmlfor="email">Email</label>
                <input type ="text" name="email"required className="from-control"></input>
            </div>

            <div className = "from-group">  
                <label htmlfor="password">Password</label>
                <input type ={passBoxType} name="password" requirrd className="from-control"></input>

            </div>
            <button type="submite" className="btn btn-primary m-1">Register</button>
            <button type="button"
            className="btn btn-success m-1" 
            onClick={props.click} 
            stayl = {btnStyle}> 
            
            {btntext}</button>
            <StyledButton type="button">login</StyledButton>
        </form>
    </div>
    );
}