import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Lessons from './pages/Lessons';
import Rewards from './pages/Rewards.jsx';
import Progress from './pages/Progress';
import Leaderboards from './pages/Leaderboards.jsx';
import ScoresAndRemarks from './pages/ScoresAndRemarks.jsx';
import LogIn from './pages/LogIn';
import Signin from './components/Auth/Signin';
import SingUp from './components/Auth/Signup';
import AuthDetaisl from './components/Auth/AuthDetaisl';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/progress" element={<Progress />} />
          {/* <Route path="/rewards" element={<Rewards />} /> */}
          {/* <Route path="/leaderboards" element={<Leaderboards />} /> */}
          <Route path="/scoresAndRemarks" element={<ScoresAndRemarks />} />
          <Route path="/SignIn" element={<Signin/>} />
          <Route path="/SignUp" element={<SingUp/>} />
          
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;