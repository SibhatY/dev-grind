import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CodeRunner from './components/CodeRunner';
import PlayerStats from './components/PlayerStats';
import challenges from './data/challenges';
import Hub from './pages/Hub';
import ChallengeList from './pages/ChallengeList';
import Profile from './pages/Profile';
import ActiveChallenge from './pages/ActiveChallenge';

function App() {
  return (
    <Router>
      <div className='main-title'>
        <PlayerStats />
        <Routes>
          <Route path='/' element={<Hub />} />
          <Route path='/challenges' element={<ChallengeList />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/challenge/:id' element={<ActiveChallenge />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
