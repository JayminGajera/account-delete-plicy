import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AccountDeletionPolicy from './Components/AccountDeletionPolicy';
import ConfirmOTP from './Components/ConfirmOTP';
import DeleteCard from './Components/DeleteCard';
import Deletion from './Components/Deletion';
import FeedBackForm from './Components/FeedBackForm';
import Header from './Components/Header';

function App() {
  return (
    <div className="w-full h-screen">
    <Header/>

    <Routes>
      <Route path='/' element={<Deletion/>}/>
      <Route path='/confirm-otp' element={<ConfirmOTP/>}/>
    </Routes>

    </div>
  );
}

export default App;
