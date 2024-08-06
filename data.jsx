const initialData = () => {
    localStorage.setItem('ads', JSON.stringify([]));
    localStorage.setItem('cart', JSON.stringify([]));
    localStorage.setItem('requests', JSON.stringify([]));
    localStorage.setItem('user', JSON.stringify({}));
  };
  
  initialData();
  