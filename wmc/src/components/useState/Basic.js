import React, { useState } from "react";

const Basic = () => {
    const [text, setText] = useState("random title");
    const handleClick = () => {
        if (text === "random title") {
            setText("hello world");
        } else {
            setText("random title");
        }
    };

    return (
        <React.Fragment>
            <div className="container">
                <h1>{text}</h1>
                <button type="button" className="btn" onClick={handleClick}>
                    change title
                </button>
            </div>
        </React.Fragment>
    );
};

export default Basic;
