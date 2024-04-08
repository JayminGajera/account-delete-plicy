import { Route, Routes } from 'react-router-dom';
import './App.css';
import ConfirmOTP from './Components/ConfirmOTP';
import DeleteCard from './Components/DeleteCard';
import Deletion from './Components/Deletion';
import Header from './Components/Header';

function App() {
  return (
    <div className="w-full h-screen">
    <Header/>

    <Routes>
      <Route path='/' element={<DeleteCard/>}/>
      <Route path='/account-delete-policy' element={<Deletion/>}/>
      <Route path='/confirm-otp' element={<ConfirmOTP/>}/>
    </Routes>

    </div>
  );
}

export default App;
