import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">ثبت نام</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="نام"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="نام خانوادگی"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ایمیل"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="آدرس"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="شماره تلفن"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="رمز عبور"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleRegister}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          ثبت نام
        </button>
      </div>
    </div>
  );
};

export default Register;
