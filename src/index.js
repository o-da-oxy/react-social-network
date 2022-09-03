import './index.css';
import reportWebVitals from './reportWebVitals';
import {renderPage} from './redux/render';
import ReactDOM from "react-dom/client";

export const root = ReactDOM.createRoot(document.getElementById('root'));
renderPage(root);

reportWebVitals();
