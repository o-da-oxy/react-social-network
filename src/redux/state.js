import {renderPage} from "./render";
import {root} from "../index"

let state = {
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
}

export let addPost = (text) => {
    let id = state.posts.length + 1;
    state.posts.push({id: id, message: text});
    renderPage(root);
}

export default state;