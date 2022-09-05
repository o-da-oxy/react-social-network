import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import store from "./redux/state";

export const root = ReactDOM.createRoot(document.getElementById('root'));
export const renderPage = (root) => {
    debugger
    root.render(
        <React.StrictMode>
            <App
                posts={store.getState().posts}
                dispatch={store.dispatch.bind(store)} //bind - привязка к контексту this
                dialogsItems={store.getState().dialogsItems}
                messagesItems={store.getState().messagesItems}/>
        </React.StrictMode>
    );
}
renderPage(root);

export const rerenderPage = () => {
    renderPage(root);
}

store.subscribe(rerenderPage);

reportWebVitals();
