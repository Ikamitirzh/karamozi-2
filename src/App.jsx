
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AddAd from './components/Ads/AddAd';
import AdList from './components/Ads/AdList';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import Requests from './components/Profile/Requests';
import Home from './components/Home';
import Header from './components/Header';
import AdDetails from './components/Ads/AdDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-ad" element={<AddAd />} />
        <Route path="/ads" element={<AdList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/ad/:id" element={<AdDetails />} />
        
      </Routes>
    </Router>
  );
}

export default App;
