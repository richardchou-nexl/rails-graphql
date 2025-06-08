import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodosIndex from "./TodosIndex";
import { todoProps } from "./helpers";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

const TodosMain = (props: todoProps) => {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <TodosIndex />
      </ApolloProvider>
    </React.StrictMode>
  );
};

export default TodosMain;