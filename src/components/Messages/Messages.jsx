import React from "react";
import classes from "./Messages.module.css";
import {NavLink} from "react-router-dom";

const Item = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={"/dialogs/" + props.number}
                     className={link => link.isActive ? classes.current : classes.item}
            >{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Messages = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <Item number="1" name="Veronika"/>
                <Item number="2" name="Oksana"/>
                <Item number="3" name="Liza"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi!"/>
                <Message message="Where are you?"/>
                <Message message="I'm here, behind your back"/>
                <Message message="See you!"/>
            </div>
        </div>
    )
}

export default Messages;