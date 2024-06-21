import logo from './logo.svg';
import './App.css';
import { Form } from './Form';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from './Home.js';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/form" element={<Form/>}/>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
