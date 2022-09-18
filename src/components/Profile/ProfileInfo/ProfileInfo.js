import classes from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.mainPicture}>
                <img src="https://wallpaperaccess.com/full/148746.jpg"/>
            </div>
            <div className={classes.info}>
                ava+name+description
            </div>
        </div>
    )
}

export default ProfileInfo;