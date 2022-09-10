const ADD_POST = 'ADD_POST';
const UPDATE_POST_FIELD = 'UPDATE_POST_FIELD';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_FIELD = 'UPDATE_MESSAGE_FIELD';

let store = {
    _state: {
        posts: [
            {id: 1, message: "Hi! I feel sweet!"},
            {id: 2, message: "I like cups, and what about you?"},
            {id: 3, message: "I'm in coffee!"},
        ],
        newPostText: '',
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
        ]
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost(text) {
        let id = this._state.posts.length + 1;
        this._state.posts.push({id: id, message: text});
        this._callSubscriber();
    },

    updatePostField(newText) {
        this._state.newPostText = newText;
        this._callSubscriber();
    },

    sendMassage() {

        this._callSubscriber();
    },

    updateMessageField() {

        this._callSubscriber();
    },



    //dispatch - to dispatch an action - отправлять действие - инкапсуляция многих методов
    dispatch(action) {
        if (action.type === ADD_POST) {
            this.addPost(action.text);
        }
        if (action.type === UPDATE_POST_FIELD) {
            this.updatePostField(action.text);
        }
        if (action.type === SEND_MESSAGE) {

        }
        if (action.type === UPDATE_MESSAGE_FIELD) {

        }
    }
}

export const addPostAction = (text) => {
    return {
        type: ADD_POST,
        text: text
    }
}

export const updatePostFieldAction = (newText) => {
    return {
        type: UPDATE_POST_FIELD,
        text: newText
    }
}
export const updateMessageFieldAction = () => {
    return {
        type: UPDATE_MESSAGE_FIELD
    }
}

window.store = store;
export default store;
