import  { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AdItem = ({ ad }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddComment = () => {
    const ads = JSON.parse(localStorage.getItem('ads')) || [];
    const adIndex = ads.findIndex(a => a.id === ad.id);
    if (adIndex !== -1) {
      ads[adIndex].comments.push(comment);
      localStorage.setItem('ads', JSON.stringify(ads));
      setComment('');
    }
  };

  const handleRateAd = () => {
    const ads = JSON.parse(localStorage.getItem('ads')) || [];
    const adIndex = ads.findIndex(a => a.id === ad.id);
    if (adIndex !== -1) {
      ads[adIndex].rating = (ads[adIndex].rating + rating) / 2;
      localStorage.setItem('ads', JSON.stringify(ads));
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="relative">
        <img src={`https://via.placeholder.com/300x200?text=${ad.title}`} alt={ad.title} className="w-full h-40 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute inset-0 flex items-end p-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{ad.title}</h2>
            <p className="text-gray-300 mb-2">قیمت: {ad.price} تومان</p>
            <Link to={`/ad/${ad.id}`} className="text-blue-300 hover:underline">جزئیات</Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="نظر خود را بنویسید"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={handleAddComment}
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          ارسال نظر
        </button>
        <div className="mt-4">
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          />
          <button
            onClick={handleRateAd}
            className="py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
          >
            ثبت امتیاز
          </button>
        </div>
      </div>
    </div>
  );
};

AdItem.propTypes = {
  ad: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    deliveryTime: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default AdItem;
