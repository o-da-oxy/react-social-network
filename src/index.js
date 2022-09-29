import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import reduxStore from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";

export const root = ReactDOM.createRoot(document.getElementById('root'));
export const renderPage = (root) => {
    debugger
    root.render(
        <BrowserRouter>
            <App
                store={reduxStore}
            />
        </BrowserRouter>
    );
}
renderPage(root);

export const rerenderPage = () => {
    renderPage(root);
}

reduxStore.subscribe(rerenderPage);

reportWebVitals();
