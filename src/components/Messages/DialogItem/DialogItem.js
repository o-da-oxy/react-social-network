import classes from "../Messages.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={"/dialogs/" + props.id}
                     className={link => link.isActive ? classes.current : classes.item}
            >{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;