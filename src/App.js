import logo from './logo.svg';
import HomePage from "./Pages/HomePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.scss';

function App() {
    return (
        <BrowserRouter basename="/Portfolio">
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
