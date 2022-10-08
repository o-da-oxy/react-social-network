import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import reduxStore from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

export const root = ReactDOM.createRoot(document.getElementById('root'));
export const renderPage = (root) => {
    root.render(
        <BrowserRouter>
            <StoreContext.Provider value={reduxStore}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>
    );
}
renderPage(root);

export const rerenderPage = () => {
    renderPage(root);
}

reduxStore.subscribe(rerenderPage);

reportWebVitals();
