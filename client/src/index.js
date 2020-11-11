
import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./css/landingPage.css";
import "./css/home.css";
import "./css/dashBoard.css";
import {ApolloClient,  InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/landingPage.css'
import './css/home.css'


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:3001/graphql",
});

ReactDOM.render(
  <ApolloProvider client= {client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
