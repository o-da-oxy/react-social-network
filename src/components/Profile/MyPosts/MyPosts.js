import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostAction, updatePostFieldAction} from "../../../redux/state";

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message}/>);

    let newPostText = React.useRef();

    let addPost = () => {
        let text = newPostText.current.value;
        props.dispatch(addPostAction(text));
        props.dispatch(updatePostFieldAction(''));
    }

    function onPostChange() {
        let text = newPostText.current.value;
        props.dispatch(updatePostFieldAction(text));
    }

    return (
        <div className={classes.content}>
            <div className={classes.myPostsHeader}>
                <h3>My posts</h3>
            </div>
            <div className={classes.newPost}>
                <form>
                    <h4>New post</h4>
                </form>
                <textarea
                    ref={newPostText}
                    value={props.newPostText}
                    onChange={onPostChange}
                    placeholder={'Input a post...'}
                ></textarea>
                <button onClick={addPost} >Add post</button>
            </div>
            <div className={classes.myPosts}>
                { postsElements }
            </div>
        </div>
    )
};

export default MyPosts;