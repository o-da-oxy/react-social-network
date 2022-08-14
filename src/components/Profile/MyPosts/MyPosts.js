import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

let posts = [
    {id: 1, message: "Hi! I feel sweet!"},
    {id: 2, message: "I like cups, and what about you?"},
    {id: 3, message: "I'm in coffee!"},
];

let postsElements = posts.map((p) => <Post message={p.message}/>);

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
                { postsElements }
            </div>
        </div>
    )
};

export default MyPosts;