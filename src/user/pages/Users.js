import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image: "https://picsum.photos/seed/picsum/200/300",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
