class Receipt {
  constructor() {
    this._baseUrl = "http://192.168.1.185:3002";
  }

  _checkResponse(res) {
    console.log("Привет!");
    // if (res.ok) {
    //   debugger
    //   return res.json();
    // } else {
    //   window.location.reload();
    //   return Promise.reject(`Ошибка ${res.status}`);
    // }
  }

  // Получаем заказ

  getReceipt() {
    return fetch(`${this._baseUrl}/getReceipts`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Accept": "application/json",
      },
    }).then((res) => {

      return this._checkResponse(res);
    });
  }
  findMyReceipt(id) {
    return fetch(`${this._baseUrl}/findMyReceipt/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Accept": "application/json",
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // Создаем заказ

  createReceipt(nameWhoOrders, foods, price, doneStatus) {
    debugger
    return fetch(`${this._baseUrl}/createReceipt`, {
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
      debugger;
      return this._checkResponse(res);
    });
  }

  addToReceipt(name, description, price, gram, imageLink, id) {
    debugger;
    return fetch(`${this._baseUrl}/addPositionInReceipt/${id}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
        gram: gram,
        imageLink: imageLink,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  changePrice(price, id) {
    return fetch(`${this._baseUrl}/changePrice/${id}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newPrice: price,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  clearReceipt(id) {
    return fetch(`${this._baseUrl}/clearReceipt/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const receiptApi = new Receipt();

export default receiptApi;
