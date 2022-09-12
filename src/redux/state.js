const ADD_POST = 'ADD_POST';
const UPDATE_POST_FIELD = 'UPDATE_POST_FIELD';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_FIELD = 'UPDATE_MESSAGE_FIELD';

let store = {
    _state: {
        profile: {
            posts: [
                {id: 1, message: "Hi! I feel sweet!"},
                {id: 2, message: "I like cups, and what about you?"},
                {id: 3, message: "I'm in coffee!"},
            ],
            newPostText: '',
        },
        messages: {
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
        let id = this._state.profile.posts.length + 1;
        this._state.profile.posts.push({id: id, message: text});
        this._callSubscriber();
    },

    updatePostField(newText) {
        this._state.profile.newPostText = newText;
        this._callSubscriber();
    },

    sendMassage(text) {
        let id = this._state.messages.messagesItems.length + 1;
        this._state.messages.messagesItems.push({id: id, message: text});
        this._callSubscriber();
    },

    updateMessageField(newMessage) {
        this._state.messages.newMessage = newMessage;
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
            this.sendMassage(action.text)
        }
        if (action.type === UPDATE_MESSAGE_FIELD) {
            this.updateMessageField(action.text)
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

export const sendMessageAction = (text) => {
    return {
        type: SEND_MESSAGE,
        text: text
    }
}

export const updateMessageFieldAction = (newText) => {
    return {
        type: UPDATE_MESSAGE_FIELD,
        text: newText
    }
}

window.store = store;
export default store;
