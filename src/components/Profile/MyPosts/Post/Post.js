import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.posts}>
            <img src="https://ih1.redbubble.net/image.1619800675.8172/pp,840x830-pad,1000x1000,f8f8f8.jpg" alt="background"/>
            {props.message}
        </div>
    )
}

export default Post;