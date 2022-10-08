import React from "react";
import {sendMessageAction, updateMessageFieldAction} from "../../redux/store";
import Messages from "./Messages";
import StoreContext from "../../StoreContext";

const MessagesContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (reduxStore) => {
                    let sendMessage = (text) => {
                        reduxStore.dispatch(sendMessageAction(text));
                        reduxStore.dispatch(updateMessageFieldAction(''));
                    }

                    let updateMessageFieldText = (text) => {
                        reduxStore.dispatch(updateMessageFieldAction(text));
                    }
                    return (
                        <Messages
                            updateMessageFieldText={updateMessageFieldText}
                            sendMessage={sendMessage}
                            currentMessageText={reduxStore.getState().messages.newMessage}
                            dialogsItems={reduxStore.getState().messages.dialogsItems}
                            messagesItems={reduxStore.getState().messages.messagesItems}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
};

export default MessagesContainer;