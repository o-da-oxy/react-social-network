import {addPostAction, updatePostFieldAction} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostAction(text));
            dispatch(updatePostFieldAction(''));
        },
        updatePostFieldText: (text) => {
            dispatch(updatePostFieldAction(text));
        }
    }
}

let mapStateToProps = (state) => {
    return {
        newPostText: state.profile.newPostText,
        posts: state.profile.posts
    }
}

//после mapStateToProps отрисовка, если произошли изменения (не сработает, если изменять state напрямую)
//connect - подписка на обновления переданных аргиментов
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;