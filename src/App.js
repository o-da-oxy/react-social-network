import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <Profile/>
        </div>
    );
}

export default App;
