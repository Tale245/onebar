import React from "react";

import "./UsersList.css";
import UserCard from "../UserCard/UserCard";

const UsersList = ({ userList, changeLimit }) => {
  return (
    <section className="userList">
      <h1 className="userList__title">Установить лимит</h1>
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
    </section>
  );
};

export default UsersList;
