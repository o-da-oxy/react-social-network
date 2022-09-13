const ADD_POST = 'ADD_POST';
const UPDATE_POST_FIELD = 'UPDATE_POST_FIELD';

const profileReducer = (state, action) => {
    debugger
    if (action.type === ADD_POST) {
        let id = state.posts.length + 1;
        state.posts.push({id: id, message: action.text});
    }
    if (action.type === UPDATE_POST_FIELD) {
        state.newPostText = action.text;
    }
}

export default profileReducer;
