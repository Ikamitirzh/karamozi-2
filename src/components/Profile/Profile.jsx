import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser || {});
  }, []);

  const handleUpdateProfile = () => {
    localStorage.setItem('user', JSON.stringify(user));
    setEditMode(false);
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">پروفایل من</h2>
        {editMode ? (
          <>
            <input
              type="text"
              value={user.name || ''}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="نام"
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={user.surname || ''}
              onChange={(e) => setUser({ ...user, surname: e.target.value })}
              placeholder="نام خانوادگی"
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              value={user.email || ''}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="ایمیل"
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={user.address || ''}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              placeholder="آدرس"
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={user.phone || ''}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              placeholder="شماره تلفن"
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
            />
            <button
              onClick={handleUpdateProfile}
              className="py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 mr-2"
            >
              به‌روزرسانی پروفایل
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="py-2 px-4 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600"
            >
              لغو
            </button>
          </>
        ) : (
          <>
            <p className="mb-2"><strong>نام:</strong> {user.name || 'نام موجود نیست'}</p>
            <p className="mb-2"><strong>نام خانوادگی:</strong> {user.surname || 'نام خانوادگی موجود نیست'}</p>
            <p className="mb-2"><strong>ایمیل:</strong> {user.email || 'ایمیل موجود نیست'}</p>
            <p className="mb-2"><strong>آدرس:</strong> {user.address || 'آدرس موجود نیست'}</p>
            <p className="mb-4"><strong>شماره تلفن:</strong> {user.phone || 'شماره تلفن موجود نیست'}</p>
            <button
              onClick={() => navigate('/requests')}
              className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 mr-2"
            >
              مدیریت درخواست‌ها
            </button>
            <button
              onClick={() => setEditMode(true)}
              className="py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
            >
              ویرایش پروفایل
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
