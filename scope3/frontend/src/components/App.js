// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Header from "./Header"

// function App() {
//     return (
//         <>
//             <Header />
//         </>
//     );
// }

// export default App;
import React, { Component } from "react";
import { render } from "react-dom";
import Page from "./Page";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Page />;
    }

}

const appDiv = document.getElementById("app");
render(<App />, appDiv)
