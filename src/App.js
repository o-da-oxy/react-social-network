import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<Profile
                        posts={props.posts}
                        newPostText={props.newPostText}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path="/profile" element={<Profile
                        posts={props.posts}
                        newPostText={props.newPostText}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path="/dialogs" element={<Messages
                        dialogsItems={props.dialogsItems}
                        messagesItems={props.messagesItems}
                        newMessageText={props.newMessageText}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>

                    <Route path="/dialogs"
                           element={<Messages
                               dialogsItems={props.dialogsItems}
                               messagesItems={props.messagesItems}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
