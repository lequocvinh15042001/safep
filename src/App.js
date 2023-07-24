import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Account } from './pages/AccountOverview';
import {Counselling} from './pages/Counselling';
import {Home} from './pages/Home/screens/FrameScreen/FrameScreen';
import {Login} from './pages/Login/Login';
import {Signup} from './pages/Signup';
import { Courses } from './pages/Courses/Courses';
// import { CounsellingRoomCalendar } from './pages/CounsellingCalendar/CounsellingRoomCalendar/screens/CounsellingRoomCalendar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/account" element={<Account />} />
          <Route path="/counselling" element={<Counselling />} />
          {/* <Route path="/counselling-carlendar" element={<CounsellingRoomCalendar/>} /> */}

          {/* <Route component={NotFound}/> */}
      </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
