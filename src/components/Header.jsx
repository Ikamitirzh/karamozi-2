/* eslint-disable no-unused-vars */
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';

const Header = () => {
  const [notifications, setNotifications] = useState(JSON.parse(localStorage.getItem('notifications')) || []);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          وبسایت فروشگاهی
        </Link>
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="flex items-center p-2 rounded-md hover:bg-blue-700"
          >
            <FaBell className="text-xl" />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">{notifications.length}</span>
            )}
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden">
              {notifications.length === 0 ? (
                <p className="p-4 text-gray-500">هیچ نوتیفیکیشنی ندارید</p>
              ) : (
                notifications.map((notification, index) => (
                  <div key={index} className="p-4 border-b last:border-b-0">
                    <p>{notification.message}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
        <Link to="/cart" className="text-lg">
          سبد خرید
        </Link>
        <button onClick={() => {/* handle sign out */}} className="text-lg">
          خروج
        </button>
      </div>
    </header>
  );
};

export default Header;
