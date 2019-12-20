import React from "react";
import { Route } from "react-router-dom";
import HomeView from '../views/HomeView'
import Login from "../views/Login";

export default (
  <>
    <Route path="/" exact component={Login} />
    <Route path="/home" exact component={HomeView} />
  </>
);
