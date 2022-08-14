import React from "react";
import classes from "./Messages.module.css";
import {NavLink} from "react-router-dom";

const Item = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={"/dialogs/" + props.id}
                     className={link => link.isActive ? classes.current : classes.item}
            >{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
};

let dialogsItems = [
    {id: "1", name: "Veronika"},
    {id: "2", name: "Oksana"},
    {id: "3", name: "Liza"},
];

let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "Where are you?"},
    {id: 3, message: "I'm here, behind your back"},
    {id: 4, message: "See you!"},
];

let dialogsItemsElements = dialogsItems.map((d) => <Item id={d.id} name={d.name}/> );

let messagesElements = messages.map((m) => <Message message={m.message}/> );

const Messages = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsItemsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    )
};

export default Messages;