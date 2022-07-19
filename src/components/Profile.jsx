import React from 'react';
import "./Profile.module.css";
import classes from "./Profile.module.css";

const Profile = () => {
    return <div className={classes.content}>
        <div className={classes.contentImg}>
            <img src="https://img2.akspic.ru/crops/4/6/0/7/47064/47064-tsvetok-tyulpany-zavod-krasnyj_cvet-rastenie-1920x1080.jpg" />
        </div>
        <div>
            ava+name+description
        </div>
        <div>My posts</div>
        <div>New post</div>
        <div>
            <div>post 1</div>
            <div>post 2</div>
        </div>
    </div>
}

export default Profile;