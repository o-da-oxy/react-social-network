import React from "react";
import {sendMessageAction, updateMessageFieldAction} from "../../redux/store";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageAction(text));
            dispatch(updateMessageFieldAction(''));
        },
        updateMessageFieldText: (text) => {
            dispatch(updateMessageFieldAction(text));
        }
    }
}

let mapStateToProps = (state) => {
    return {
        currentMessageText: state.messages.newMessage,
        dialogsItems: state.messages.dialogsItems,
        messagesItems: state.messages.messagesItems
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;