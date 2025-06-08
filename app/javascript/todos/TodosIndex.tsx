import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { todoProps } from "./helpers";
import { useQuery, useMutation, gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;

const TodosIndex = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ border: '1px solid red' }}>
      <h2>!ToDos React Component ⚛️</h2>
      <div>
        {
          data.users.map((user: { id: string; name: string }) => (
            <div key={user.id} style={{ marginBottom: '10px' }}>
              {user.name}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default TodosIndex;