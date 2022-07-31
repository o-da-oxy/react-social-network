import React from 'react';
import classes from "./Profile.module.css";
import Post from "./MyPosts/Post/Post";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.mainPicture}>
                <img src="https://wallpaperaccess.com/full/148746.jpg"/>
            </div>
            <div className={classes.info}>
                ava+name+description
            </div>
            <div className={classes.myPostsHeader}>
                My posts
            </div>
            <div className={classes.newPost}>
                <form>New post</form>
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

export default Profile;