import React, { useState } from "react";
import "./UseState.css";
import Basic from "./Basic";
import UseStateArray from "./UseStateArray";
import UseStateObject from "./UseStateObject";
import UseStateCounter from "./UseStateCounter";

function UseState() {
    return (
        <div className="container">
            <h2>Learning UseState</h2>
            <Basic />
            <UseStateArray />
            <UseStateObject />
            <UseStateCounter />
        </div>
    );
}

export default UseState;
