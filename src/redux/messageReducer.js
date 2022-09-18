const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_FIELD = 'UPDATE_MESSAGE_FIELD';

let initialState = {
    dialogsItems: [
        {id: "1", name: "Veronika"},
        {id: "2", name: "Oksana"},
        {id: "3", name: "Liza"},
    ],
    messagesItems: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Where are you?"},
        {id: 3, message: "I'm here, behind your back"},
        {id: 4, message: "See you!"},
    ],
    newMessage: '',
}

const messageReducer = (state = initialState, action) => {
    if (action.type === SEND_MESSAGE) {
        let id = state.messagesItems.length + 1;
        state.messagesItems.push({id: id, message: action.text});
    }
    if (action.type === UPDATE_MESSAGE_FIELD) {
        state.newMessage = action.text;
    }
    return state;
}

export default messageReducer;
