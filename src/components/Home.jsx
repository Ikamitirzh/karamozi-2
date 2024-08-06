import  { useState, useEffect } from 'react';
import AdItem from './Ads/AdItem';

const Home = () => {
  const [ads, setAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [category, setCategory] = useState('');
  const [sortOption, setSortOption] = useState('date');
  
  useEffect(() => {
    const fetchAds = () => {
      const adsData = JSON.parse(localStorage.getItem('ads')) || [];
      setAds(adsData);
    };
    
    fetchAds();
  }, []);

  useEffect(() => {
    const now = new Date().toISOString().split('T')[0];
    let adsToFilter = ads.filter(ad => !ad.expiryDate || ad.expiryDate >= now);
    
    if (category) {
      adsToFilter = adsToFilter.filter(ad => ad.category === category);
    }

    if (sortOption === 'date') {
      adsToFilter.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === 'price') {
      adsToFilter.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'rating') {
      adsToFilter.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredAds(adsToFilter);
  }, [ads, category, sortOption]);

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">لیست آگهی‌ها</h2>
      <div className="mb-4 flex justify-between">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">تمام دسته‌ها</option>
          <option value="birthday">تولد</option>
          <option value="pool">استخر</option>
          <option value="massage">ماساژ</option>
        </select>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
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

export default Home;
