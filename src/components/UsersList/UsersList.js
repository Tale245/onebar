import React from "react";

import "./UsersList.css";
import UserCard from "../UserCard/UserCard";

const UsersList = ({ userList, changeLimit, userInfo }) => {

  const filteredOrders = userList.filter((user) => {
    const name = user.name?.toLowerCase().trim() || '';
    const userName = userInfo.name.toLowerCase();
    const isNeonTable = name.includes('neon');

    if (userName === 'admin' || 'администратор') return true;
    if (userName === 'neon') return isNeonTable;
    return !isNeonTable;
  });

  return (
    <section className="userList">
      <h1 className="userList__title">Установить лимит</h1>
      <div className="userList__container">
        {filteredOrders.map((item) => (
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
