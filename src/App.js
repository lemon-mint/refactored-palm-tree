import React from "react";
import "./App.css";
import CodeEdit from "./code";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello World!!</h1>
                <CodeEdit/>
            </React.Fragment>
        )
    }
}

export default App;
