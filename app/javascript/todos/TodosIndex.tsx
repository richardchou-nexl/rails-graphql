import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useGetUserLazyQuery, UserInfoFragment } from "../__generated__/types";


const TodosIndex = () => {
  const [getUser, { loading, error, data }] = useGetUserLazyQuery();

  const handleUserClick = (id: string) => {
    getUser({ variables: { id } });
  };
  
  return (
    <div style={{ border: '1px solid red' }}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <button onClick={() => handleUserClick("31")}>Get Users</button>
      <div>
        <h2>ToDos React Component ⚛️</h2>
        {
          data?.users &&
          data.users.map((user: UserInfoFragment) => (
            <div key={user.id} style={{ marginBottom: '10px' }}>
              <h3>{user.name}</h3>
              <p>Id: {user.id}</p>
              <p>Email: {user.email}</p>
              <p>Name: {user.name}</p>
            </div>
          ))
        }
        {
          data?.user && (
            <div style={{ marginBottom: '10px' }}>
              <h3>{data.user.name}</h3>
              <p>Id: {data.user.id}</p>
              <p>Email: {data.user.email}</p>
              <p>Name: {data.user.name}</p>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default TodosIndex;