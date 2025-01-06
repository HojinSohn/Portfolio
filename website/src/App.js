import logo from './logo.svg';
import HomePage from "./Pages/HomePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumePage from "./Pages/ResumePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<ResumePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
