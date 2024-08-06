
import { Link } from 'react-router-dom';

const Header = () => {
  const handleSignOut = () => {
    // عملیات خروج کاربر (مثلاً پاک کردن توکن از localStorage)
    localStorage.removeItem('user');
    window.location.href = '/'; // هدایت به صفحه اصلی
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ایکامی شاپ</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/add-ad" className="hover:text-gray-300">افزودن آگهی</Link></li>
            <li><Link to="/profile" className="hover:text-gray-300">پروفایل</Link></li>
            <li><Link to="/requests" className="hover:text-gray-300">درخواست ها </Link></li>
            <li><button onClick={handleSignOut} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"> خروج</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

