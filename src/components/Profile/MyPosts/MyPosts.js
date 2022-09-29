import classes from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message}/>);

    let newPostTextRef = React.useRef();

    let onPostChange = () => {
        props.updatePostFieldText(newPostTextRef.current.value);
    }

    let onAddPost = () => {
        props.addPost(newPostTextRef.current.value);
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
                    ref={ newPostTextRef }
                    value={props.newPostText}
                    onChange={onPostChange}
                    placeholder={'Input a post...'}
                ></textarea>
                <button onClick={onAddPost} >Add post</button>
            </div>
            <div className={classes.myPosts}>
                { postsElements }
            </div>
        </div>
    )
};

export default MyPosts;