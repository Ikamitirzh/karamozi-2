import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AdDetails = () => {
  const { id } = useParams();
  const [ad, setAd] = useState(null);

  useEffect(() => {
    const ads = JSON.parse(localStorage.getItem('ads')) || [];
    const ad = ads.find(ad => ad.id === parseInt(id));
    setAd(ad);
  }, [id]);

  const handleRequestAd = () => {
    // Fetch existing requests or initialize as empty array
    let requests = JSON.parse(localStorage.getItem('requests')) || [];
    
    // Check if requests is an array
    if (!Array.isArray(requests)) {
      console.error('Requests is not an array');
      requests = []; // Initialize as empty array
    }

    // Add new request
    requests.push({ adId: ad.id, status: 'pending' });
    localStorage.setItem('requests', JSON.stringify(requests));

    // Add notification
    let notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    
    // Check if notifications is an array
    if (!Array.isArray(notifications)) {
      console.error('Notifications is not an array');
      notifications = []; // Initialize as empty array
    }

    notifications.push({ message: `درخواست برای آگهی "${ad.title}" ارسال شد.` });
    localStorage.setItem('notifications', JSON.stringify(notifications));

    alert('درخواست شما ثبت شد.');
  };

  if (!ad) return <div>در حال بارگذاری...</div>;

  return (
    <div className="p-4 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4">{ad.title}</h2>
        <p className="mb-4">{ad.description}</p>
        <p className="mb-4">قیمت: {ad.price} تومان</p>
        <p className="mb-4">تخفیف: {ad.discount}%</p>
        <p className="mb-4">زمان تحویل: {ad.deliveryTime}</p>
        <button
          onClick={handleRequestAd}
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          درخواست برای خرید
        </button>
      </div>
    </div>
  );
};

export default AdDetails;
