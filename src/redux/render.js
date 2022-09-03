import React from "react";
import App from "../App";
import state, {addPost, updateNewPostText} from "./state";

export const renderPage = (root) => {
    root.render(
        <React.StrictMode>
            <App
                posts={state.posts}
                addPost={addPost}
                dialogsItems={state.dialogsItems}
                messagesItems={state.messagesItems}/>
        </React.StrictMode>
    );
}