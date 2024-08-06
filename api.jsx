import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // آدرس سرور بک‌اند

export const fetchAds = () => axios.get(`${API_URL}/ads`);
export const addAd = (ad) => axios.post(`${API_URL}/ads`, ad);
export const addToCart = (ad) => axios.post(`${API_URL}/cart`, ad);
export const fetchCart = () => axios.get(`${API_URL}/cart`);
export const fetchRequests = () => axios.get(`${API_URL}/requests`);
export const updateRequest = (requestId, status) => axios.post(`${API_URL}/requests/${requestId}`, { status });