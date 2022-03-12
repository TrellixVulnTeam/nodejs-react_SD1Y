import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyle from "./styles/GlobalStyle";
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
