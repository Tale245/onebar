import React from "react";

import "./SignIn.css";
import { useForm } from "react-hook-form";

const Signin = ({signin}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    signin(data.email, data.password, data.codeWord)
  };
  return (
    <section className="signin">
      <h1 className="signin__title">Авторизация</h1>
      <form className="signin__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
          })}
          className="signin__input"
          placeholder="Введите эмайл"
        />
        <input
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
            },
          })}
          className="signin__input"
          placeholder="Введите пароль"
        />
        <input
          {...register("codeWord", {
            required: true,
            minLength: {
              value: 3,
            },
          })}
          className="signin__input"
          placeholder="Введите кодовое слово"
        />
        <button className="signin__submit-btn">Вход</button>
      </form>
    </section>
  );
};

export default Signin;
