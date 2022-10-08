import React from "react";
import {addPostAction, updatePostFieldAction} from "../../../redux/store";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (reduxStore) =>
                {
                    let addPost = (text) => {
                        reduxStore.dispatch(addPostAction(text));
                        reduxStore.dispatch(updatePostFieldAction(''));
                    }

                    let changePost = (text) => {
                        reduxStore.dispatch(updatePostFieldAction(text));
                    }
                    return (
                        <MyPosts
                            newPostText={reduxStore.getState().profile.newPostText}
                            addPost={addPost}
                            updatePostFieldText={changePost}
                            posts={reduxStore.getState().profile.posts}
                        />
                    )
                }

            }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;