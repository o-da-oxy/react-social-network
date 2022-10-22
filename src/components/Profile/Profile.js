import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;