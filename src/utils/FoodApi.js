class Food {
  constructor() {
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
    debugger
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
          linkImage: linkImage
        },
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  deleteElementInMenu(index, deleteItem) {
    debugger
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
  changeElementValueInMenu(nameOfCategory, categoryValue, newValue, objectId) {
    return fetch(`${this._baseUrl}/changeValueMenu`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categories: nameOfCategory,
        categoriesValue: categoryValue,
        newValue: newValue,
        objectId: objectId
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  changeElementValueInBarMenu(nameOfCategory, categoryValue, newValue, objectId) {
    return fetch(`${this._baseUrl}/changeValueBarMenu`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categories: nameOfCategory,
        categoriesValue: categoryValue,
        newValue: newValue,
        objectId: objectId
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const food = new Food();

export default food;
