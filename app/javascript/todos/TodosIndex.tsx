import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { todoProps } from "./helpers";
import { useQuery, useMutation } from "@apollo/client";
import { gql } from "../__generated__";
import type { User } from "../__generated__/types";

const GET_USER = gql(`
  query GetUser {
    users {
      id
      name
      email
    }
  }
`);

const TodosIndex = () => {
  const { loading, error, data } = useQuery(GET_USER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ border: '1px solid red' }}>
      <h2>ToDos React Component ⚛️</h2>
      <div>
        {
          data?.users.map((user) => (
            <div key={user.id} style={{ marginBottom: '10px' }}>
              <h3>{user.name}</h3>
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