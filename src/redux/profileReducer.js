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

//чистая функция!!!
const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let id = state.posts.length + 1;
        //менять состояние КОПИИ!!! достать поверхностную, потом глубокую
        //иммутабельность
        let stateCopy = {...state};
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push({id: id, message: action.text});
        return stateCopy;
    }
    if (action.type === UPDATE_POST_FIELD) {
        let stateCopy = {...state};
        stateCopy.newPostText = action.text;
        return stateCopy;
    }
    return state;
}

export default profileReducer;
