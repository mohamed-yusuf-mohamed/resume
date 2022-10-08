import theme from "./theme"
import {ThemeProvider} from "styled-components"
import Data from "./data"
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
// import App from './App';
import Resume from "./resume.index"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Data>
                <Resume />
            </Data>
        </ThemeProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
