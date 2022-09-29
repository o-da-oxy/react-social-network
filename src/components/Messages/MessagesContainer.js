import React from "react";
import {sendMessageAction, updateMessageFieldAction} from "../../redux/store";
import Messages from "./Messages";

const MessagesContainer = (props) => {
    let sendMessage = (text) => {
        props.store.dispatch(sendMessageAction(text));
        props.store.dispatch(updateMessageFieldAction(''));
    }

    let updateMessageFieldText = (text) => {
        props.store.dispatch(updateMessageFieldAction(text));
    }

    return (
        <Messages
            updateMessageFieldText={updateMessageFieldText}
            sendMessage={sendMessage}
            currentMessageText={props.store.getState().messages.newMessage}
            dialogsItems={props.store.getState().messages.dialogsItems}
            messagesItems={props.store.getState().messages.messagesItems}
        />
    )
};

export default MessagesContainer;