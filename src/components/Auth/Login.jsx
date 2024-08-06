import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/ads');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">ورود</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ایمیل"
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
          onClick={handleLogin}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          ورود
        </button>
      </div>
    </div>
  );
};

export default Login;
