import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.posts}>
            <img src="https://s2.best-wallpaper.net/wallpaper/iphone/1805/Blue-petals-flower-black-background_iphone_1080x1920.jpg"/>
            {props.message}
        </div>
    )
}

export default Post;