import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem.js";
import MessageItem from "./MessageItem/MessageItem";

const Messages = (props) => {
    let dialogsElements = props.dialogsItems.map((d) => <DialogItem key={d.id} name={d.name} />);
    let messagesElements = props.messagesItems.map((m) => <MessageItem key={m.id} message={m.message}/> );

    let newMessageText = React.useRef(); //достать значение из textarea

    let onMessageChange = () => {
        props.updateMessageFieldText(newMessageText.current.value);
    }

    let onSendMessage = () => {
        props.sendMessage(newMessageText.current.value);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
                <div className={classes.newMessages}>
                    <textarea
                        ref={newMessageText}
                        value={props.currentMessageText}
                        onChange={onMessageChange}
                        placeholder={'Input a message...'}
                    ></textarea>
                    <button onClick={onSendMessage} >Send</button>
                </div>
            </div>
        </div>
    )
};

export default Messages;