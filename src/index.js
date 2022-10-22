import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import reduxStore from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

export const root = ReactDOM.createRoot(document.getElementById('root'));
export const renderPage = (root) => {
    root.render(
        <BrowserRouter>
            <Provider store={reduxStore}>
                <App />
            </Provider>
        </BrowserRouter>
    );
}
renderPage(root);

export const rerenderPage = () => {
    renderPage(root);
}

reduxStore.subscribe(rerenderPage);

reportWebVitals();
