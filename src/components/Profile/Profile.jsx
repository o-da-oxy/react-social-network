import React from 'react';
import classes from "./Profile.module.css";
import Post from "./MyPosts/Post/Post";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.mainPicture}>
                <img
                    src="https://img2.akspic.ru/crops/4/6/0/7/47064/47064-tsvetok-tyulpany-zavod-krasnyj_cvet-rastenie-1920x1080.jpg"/>
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
                <Post message='Hi! I feel great!'/>
                <Post message='I like flowers, and what about you?'/>
                <Post message="I'm in Netherlands!"/>
            </div>
        </div>
    )
}

export default Profile;