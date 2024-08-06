import  { useEffect, useState } from 'react';
import AdItem from './AdItem';
import PropTypes from 'prop-types';

const AdList = ({ ads }) => {
  const [filteredAds, setFilteredAds] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('date');

  useEffect(() => {
    const now = new Date().toISOString().split('T')[0];
    const validAds = ads.filter(ad => !ad.expiryDate || ad.expiryDate >= now);
    let sortedAds = [...validAds];
    
    if (sortOption === 'date') {
      sortedAds.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === 'price') {
      sortedAds.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'rating') {
      sortedAds.sort((a, b) => b.rating - a.rating);
    }

    setFilteredAds(selectedCategory ? sortedAds.filter(ad => ad.category === selectedCategory) : sortedAds);
  }, [selectedCategory, sortOption, ads]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">لیست آگهی‌ها</h2>
      <div className="mb-4 flex justify-between">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">تمام دسته‌ها</option>
          <option value="birthday">تولد</option>
          <option value="pool">استخر</option>
          <option value="massage">ماساژ</option>
        </select>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="date">تاریخ جدیدترین</option>
          <option value="price">قیمت</option>
          <option value="rating">امتیاز</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredAds.map((ad, index) => (
          <AdItem key={index} ad={ad} />
        ))}
      </div>
    </div>
  );
};

AdList.propTypes = {
  ads: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      discount: PropTypes.number,
      dailyDiscount: PropTypes.bool
    })
  ).isRequired
};

export default AdList;
