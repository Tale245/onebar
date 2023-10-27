class Order {
  constructor() {
    this._baseUrl = "http://192.168.0.104:3001";
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      // window.location.reload();
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }

  // Получаем заказ

  getOrders() {
    return fetch(`${this._baseUrl}/orders`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // Создаем заказ

  createOrder(nameWhoOrders, foods, price, doneStatus) {
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
        doneStatus: doneStatus,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  updateDoneStatus(doneStatus, id) {
    return fetch(`${this._baseUrl}/updateDoneStatus/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        doneStatus: doneStatus,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  downLoad(object, name) {
    return fetch(`${this._baseUrl}/download`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        object: object,
        name: name,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const orderApi = new Order();

export default orderApi;
