import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import { Routes, Route } from "react-router-dom";
import SingleChat from './Components/ChatArea/SingleChat';
import GroupChat from './Components/ChatArea/GroupChat';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/chats' element={<Home></Home>}>
          <Route index element={<SingleChat></SingleChat>}></Route>
          <Route path='groupchats' element={<GroupChat></GroupChat>}></Route>

        </Route>

        <Route path='/' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
