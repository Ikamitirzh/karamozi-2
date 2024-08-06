import  { useState, useEffect } from 'react';

const Requests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests(JSON.parse(localStorage.getItem('requests')) || []);
  }, []);

  const handleAccept = (index) => {
    const updatedRequests = requests.filter((_, i) => i !== index);
    localStorage.setItem('requests', JSON.stringify(updatedRequests));
    setRequests(updatedRequests);
  };

  const handleReject = (index) => {
    const updatedRequests = requests.filter((_, i) => i !== index);
    localStorage.setItem('requests', JSON.stringify(updatedRequests));
    setRequests(updatedRequests);
    alert('پیام: درخواست پذیرفته نشد');
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">مدیریت درخواست‌ها</h2>
        {requests.length === 0 ? (
          <p>درخواستی وجود ندارد</p>
        ) : (
          requests.map((request, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 border border-gray-300 rounded-md">
              <h3 className="text-lg font-semibold mb-2">آگهی: {request.title}</h3>
              <button
                onClick={() => handleAccept(index)}
                className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 mr-2"
              >
                پذیرش
              </button>
              <button
                onClick={() => handleReject(index)}
                className="py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
              >
                رد کردن
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Requests;
