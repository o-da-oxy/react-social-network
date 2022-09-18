const ADD_POST = 'ADD_POST';
const UPDATE_POST_FIELD = 'UPDATE_POST_FIELD';

let initialState = {
    posts: [
        {id: 1, message: "Hi! I feel sweet!"},
        {id: 2, message: "I like cups, and what about you?"},
        {id: 3, message: "I'm in coffee!"},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let id = state.posts.length + 1;
        state.posts.push({id: id, message: action.text});
    }
    if (action.type === UPDATE_POST_FIELD) {
        state.newPostText = action.text;
    }
    return state;
}

export default profileReducer;
