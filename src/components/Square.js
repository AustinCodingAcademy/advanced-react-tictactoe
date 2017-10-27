import React from "react";

function Square(props) {
    let value = props.value;
    return (
        <button className="square" onClick={props.onClick}>{value}</button>
    );
}

export default Square;