class Auth {
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
  //   Авторизация

  signin(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
      });
  }
}

const auth = new Auth();

export default auth;
