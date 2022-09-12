import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem.js";
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageAction, updateMessageFieldAction} from "../../redux/state";

const Messages = (props) => {
    let dialogsElements = props.dialogsItems.map((d) => <DialogItem key={d.id} name={d.name} />);
    let messagesElements = props.messagesItems.map((m) => <MessageItem key={m.id} message={m.message}/> );

    let newMessageText = React.useRef(); //достать значение из textarea

    function onChange() {
        let text = newMessageText.current.value;
        props.dispatch(updateMessageFieldAction(text));
    }

    function sendMessage() {
        let text = newMessageText.current.value;
        props.dispatch(sendMessageAction(text));
        props.dispatch(updateMessageFieldAction(''));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
                <div className={classes.newMessages}>
                    <textarea ref={newMessageText} value={props.newMessageText} onChange={onChange}></textarea>
                    <button onClick={sendMessage} >Send</button>
                </div>
            </div>
        </div>
    )
};

export default Messages;