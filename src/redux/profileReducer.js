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
        return {
            ...state,
            posts: [...state.posts, {id: state.posts.length + 1, message: action.text}]
        };
    }
    if (action.type === UPDATE_POST_FIELD) {
        return {
            ...state,
            newPostText: action.text
        };
    }
    return state;
}

export default profileReducer;
