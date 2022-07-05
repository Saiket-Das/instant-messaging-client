import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/chats' element={<Home></Home>}></Route>

        <Route path='/' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
