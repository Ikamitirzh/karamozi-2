import  { useState } from 'react';

const AddAd = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [isDailyDiscount, setIsDailyDiscount] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState('');

  const handleAddAd = () => {
    const newAd = {
      id: Date.now(),
      title,
      description,
      expiryDate,
      price,
      discount,
      isDailyDiscount,
      deliveryTime,
      comments: [],
      rating: 0
    };
    const ads = JSON.parse(localStorage.getItem('ads')) || [];
    ads.push(newAd);
    localStorage.setItem('ads', JSON.stringify(ads));
    alert('Ad added successfully');
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">افزودن آگهی جدید</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="عنوان آگهی"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="توضیحات آگهی"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="قیمت (تومان)"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="تخفیف (%)"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={isDailyDiscount}
            onChange={() => setIsDailyDiscount(!isDailyDiscount)}
            className="mr-2"
          />
          <label>تخفیف روزانه</label>
        </div>
        <input
          type="text"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
          placeholder="زمان تحویل"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleAddAd}
          className="py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
        >
          افزودن آگهی
        </button>
      </div>
    </div>
  );
};

export default AddAd;
