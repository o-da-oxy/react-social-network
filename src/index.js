import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export const root = ReactDOM.createRoot(document.getElementById('root'));
export const renderPage = (root) => {
    root.render(
        <BrowserRouter>
            <App
                dispatch={store.dispatch.bind(store)} //bind - привязка к контексту this
                posts={store.getState().profile.posts}
                newPostText={store.getState().profile.newPostText}
                dialogsItems={store.getState().messages.dialogsItems}
                messagesItems={store.getState().messages.messagesItems}
                newMessageText={store.getState().messages.newMessage}
            />
        </BrowserRouter>
    );
}
renderPage(root);

export const rerenderPage = () => {
    renderPage(root);
}

store.subscribe(rerenderPage);

reportWebVitals();
