import ReactDOM from 'react-dom'
import React from 'react'

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('example')
// );


// import * as React from "react";
// import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
