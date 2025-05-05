class Order {
  constructor() {
    // this._baseUrl = "http://192.168.1.185:3002";
    // this._baseUrl = "http://192.168.1.117:3002";
    this._baseUrl = "http://192.168.0.108:3002";
  }

  _checkResponse(res) {
    if (res.ok) {

      return res.json();
    } else {

      window.location.reload();
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
        doneStatus: doneStatus
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

  async download(object, name, dateNow, whoDownLoad) {
    try {
      const response = await fetch(`${this._baseUrl}/downloadOne`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileName: name,
          dataArray: object,
        }),
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${dateNow}_${whoDownLoad}.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Ошибка при скачивании файла:", error);
    }
  }
}

const orderApi = new Order();

export default orderApi;
