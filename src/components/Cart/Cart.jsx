import  { useState, useEffect } from 'react';

const Cart = () => {
  const [requests, setRequests] = useState([]);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem('requests')) || [];
    setRequests(storedRequests);

    const storedAds = JSON.parse(localStorage.getItem('ads')) || [];
    setAds(storedAds);
  }, []);

  const handlePay = (adId) => {
    // Filter out the request
    const updatedRequests = requests.filter(request => request.adId !== adId);
    setRequests(updatedRequests);
    localStorage.setItem('requests', JSON.stringify(updatedRequests));
    alert('پرداخت موفقیت‌آمیز بود.');
  };

  const requestedAds = ads.filter(ad => requests.some(request => request.adId === ad.id && request.status === 'accepted'));

  return (
    <div className="p-4 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">سبد خرید</h2>
        {requestedAds.length === 0 ? (
          <p>سبد خرید خالی است.</p>
        ) : (
          requestedAds.map(ad => (
            <div key={ad.id} className="border-b mb-4 pb-4">
              <h3 className="text-xl font-semibold">{ad.title}</h3>
              <p>{ad.description}</p>
              <p>قیمت: {ad.price} تومان</p>
              <button
                onClick={() => handlePay(ad.id)}
                className="py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
              >
                پرداخت
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
