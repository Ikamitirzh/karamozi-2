import { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  const handlePayment = () => {
    localStorage.removeItem('cart');
    setCart([]);
    alert('پرداخت انجام شد');
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">سبد خرید</h2>
        {cart.length === 0 ? (
          <p>سبد خرید خالی است</p>
        ) : (
          cart.map((ad, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 border border-gray-300 rounded-md">
              <h3 className="text-lg font-semibold mb-2">{ad.title}</h3>
              <p>{ad.description}</p>
            </div>
          ))
        )}
        <button
          onClick={handlePayment}
          className="py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
        >
          پرداخت
        </button>
      </div>
    </div>
  );
};

export default Cart;
