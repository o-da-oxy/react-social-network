import classes from "../Messages.module.css";
import React from "react";

const MessageItem = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
};

export default MessageItem;