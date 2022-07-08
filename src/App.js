import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import { Routes, Route } from "react-router-dom";
import SingleChat from './Components/ChatArea/SingleChat';
import GroupChat from './Components/ChatArea/GroupChat';
import Signup from './Pages/Authentication/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/chats' element={<Home></Home>}>
          <Route index element={<SingleChat></SingleChat>}></Route>
          <Route path='groupchats' element={<GroupChat></GroupChat>}></Route>

        </Route>

        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>

      <ToastContainer />

    </div>
  );
}

export default App;
