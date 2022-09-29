import React from "react";
import {addPostAction, updatePostFieldAction} from "../../../redux/store";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let addPost = (text) => {
        props.store.dispatch(addPostAction(text));
        props.store.dispatch(updatePostFieldAction(''));
    }

    let changePost = (text) => {
        props.store.dispatch(updatePostFieldAction(text));
    }

    debugger
    return (
        <MyPosts
            newPostText={props.store.getState().profile.newPostText}
            addPost={addPost}
            updatePostFieldText={changePost}
            posts={props.store.getState().profile.posts}
        />
    )
};

export default MyPostsContainer;