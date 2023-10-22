import React from "react";

import "./UsersList.css";
import UserCard from "../UserCard/UserCard";
import { NavLink } from "react-router-dom";

const UsersList = ({ userList, changeLimit }) => {
  return (
    <section className="userList">
      <h1 className="userList__title">Список пользователей</h1>
      <div className="userList__container">
        {userList.map((item) => (
          <UserCard
            userLimit={item.limit}
            userName={item.name}
            key={item._id}
            id={item._id}
            changeLimit={changeLimit}
          />
        ))}
      </div>
      <NavLink to="/orders" className="userList__link-back">
        В заказы
      </NavLink>
    </section>
  );
};

export default UsersList;
