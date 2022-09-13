const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_FIELD = 'UPDATE_MESSAGE_FIELD';

const messageReducer = (state, action) => {
    if (action.type === SEND_MESSAGE) {
        let id = state.messagesItems.length + 1;
        state.messagesItems.push({id: id, message: action.text});
    }
    if (action.type === UPDATE_MESSAGE_FIELD) {
        state.newMessage = action.text;
    }
}

export default messageReducer;
