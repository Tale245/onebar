class Food {
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
  //   Получаем меню

  getFoods() {
    return fetch(`${this._baseUrl}/foodMenu`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  getFoodBar() {
    return fetch(`${this._baseUrl}/foodMenuBar`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  addNewElementInMenu(newItem, name, description, price, gram, linkImage) {
    return fetch(`${this._baseUrl}/add${newItem}InMenu`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newElement: {
          name: name,
          description: description,
          price: price,
          gram: gram,
          linkImage: linkImage,
        },
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  deleteElementInMenu(index, deleteItem) {
    return fetch(`${this._baseUrl}/delete${deleteItem}InMenu`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        index: index,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const food = new Food();

export default food;
