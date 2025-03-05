import React from "react";

import "./UserCard.css";
import { useForm } from "react-hook-form";

const UserCard = ({ userName, userLimit, id, changeLimit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    changeLimit(data.limit, id);
    reset();
  };
  return (
    <>
      {userName !== 'admin' && <div className="userCard">
        <div className="userCard__container">
          <p className="userCard__user-name">{userName}</p>
          <form className="userCard__form" onSubmit={handleSubmit(onSubmit)}>
            <p className="userCard__limit">Установить лимит пользователя:</p>
            <input
              {...register("limit", {
                required: true,
              })}
              className="userCard__limitInput"
              placeholder={`Лимит пользователя: ${userLimit}`}
            />
            <button type="sumbit" className="userCard__submit-btn">
              Установить лимит
            </button>
          </form>
        </div>
      </div>}
    </>
  );
};

export default UserCard;
