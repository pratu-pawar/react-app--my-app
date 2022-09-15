import React from "react";

export default function Greet(props) { 
    return <div className="container card p-3 mt-2 register-container text-center"> 
    <h3>{props.Name},</h3>
    <h3> thank you for joining us.</h3>
    <h3>Verification sent to {props.email}</h3>

    </div>
}