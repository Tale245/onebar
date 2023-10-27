class Auth {
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
  //   Авторизация

  signin(email, password, codeWord) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        codeWord: codeWord,
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
