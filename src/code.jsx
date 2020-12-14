import React from "react";
import "./App.css";
import Editor from "@monaco-editor/react";

class CodeEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: "javascript"
        }
    }
    render() {
        return (
            <React.Fragment>
                <Editor
                    height="50vh"
                    language={this.state.lang}
                    loading={"Loading Editor!"}
                    theme={"dark"}
                />
            </React.Fragment>
        )
    }
}

export default CodeEdit;
