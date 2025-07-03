import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "../__generated__";
import { UserInfoFragment } from "../__generated__/types";

const GET_USER = gql(`
  query GetUser($id: ID!) {
    users {
      ...UserInfo
    }

    user(id: $id) {
      ...UserInfo
    }
  }
`);

const TodosIndex = () => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: "31" },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ border: '1px solid red' }}>
      <h2>ToDos React Component ⚛️</h2>
      <div>
        {
          data?.users.map((user: UserInfoFragment) => (
            <div key={user.id} style={{ marginBottom: '10px' }}>
              <h3>{user.name}</h3>
              <p>Id: {user.id}</p>
              <p>Email: {user.email}</p>
              <p>Name: {user.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default TodosIndex;