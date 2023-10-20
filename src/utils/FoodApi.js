class Food {
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
  //   Получаем все карточки

  getFoods() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const food = new Food();

export default food;
