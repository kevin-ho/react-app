import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

import "./css/App.css"
import TodoContainer from "./components/functionBased/TodoContainer"

ReactDOM.render(<React.StrictMode><Router><TodoContainer /></Router></React.StrictMode>, document.getElementById("root"))