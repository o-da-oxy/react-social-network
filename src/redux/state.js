let store = {
    _state: {
        posts: [
            {id: 1, message: "Hi! I feel sweet!"},
            {id: 2, message: "I like cups, and what about you?"},
            {id: 3, message: "I'm in coffee!"},
        ],
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

    //dispatch - to dispatch an action - отправлять действие - инкапсуляция многих методов
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this.addPost(action.text);
        }
    }
}

window.store = store;
export default store;
