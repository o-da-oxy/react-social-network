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
        let stateCopy = {...state};
        stateCopy.messagesItems = [...state.messagesItems];
        stateCopy.messagesItems.push({id: id, message: action.text});
        return stateCopy;
    }
    if (action.type === UPDATE_MESSAGE_FIELD) {
        let stateCopy = {...state};
        stateCopy.newMessage = action.text;
        return stateCopy;
    }
    return state;
}

export default messageReducer;
