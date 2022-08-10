import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = () => {
    return (
        <div className={classes.content}>
            <div className={classes.myPostsHeader}>
                <h3>My posts</h3>
            </div>
            <div className={classes.newPost}>
                <form>
                    <h4>New post</h4>
                </form>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.myPosts}>
                <Post message='Hi! I feel sweet!'/>
                <Post message='I like cups, and what about you?'/>
                <Post message="I'm in coffee!"/>
            </div>
        </div>
    )
}

export default MyPosts;