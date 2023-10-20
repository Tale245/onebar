class Order {
    constructor() {
      this._baseUrl = "http://localhost:3001";
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка ${res.status}`);
      }
    }
  
    // Создаем заказ
    
  }
  
  const order = new Order();
  
  export default order;
  