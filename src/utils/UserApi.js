class UserApi {
  constructor() {
    this._baseUrl = "http://192.168.0.104:3001";
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }

  // Получить информацию о всех пользователях

  getUsers() {
    return fetch(`${this._baseUrl}/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // Получить информацию о текущем пользователе

  getMyInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  addToCart(name, description, price, cal, imageLink) {
    return fetch(`${this._baseUrl}/user/cards`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
        ccal: cal,
        imageLink: imageLink,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  deleteFromCart(index) {
    return fetch(`${this._baseUrl}/user/cards/${index}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  clearCart() {
    return fetch(`${this._baseUrl}/clearCart`, {
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

const userApi = new UserApi();

export default userApi;
