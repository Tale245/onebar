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

  createOrder(nameWhoOrders, foods, price) {
    return fetch(`${this._baseUrl}/createOrder`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameWhoOrders: nameWhoOrders,
        foods: foods,
        price: price,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const order = new Order();

export default order;
