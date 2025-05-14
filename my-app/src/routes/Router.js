import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../pages/Main";
import Front from "../components/Front";
import Menubar from "../pages/Menubar";
import Login from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/footer" component={Footer} exact />
        <Route path="/navbar" component={Navbar} exact />
        <Route path="/front" component={Front} exact />
        <Route path="/menubar" component={Menubar} exact />
        <Route path="/login" component={Login} exact />



        


      </Switch>
    </BrowserRouter>
  );
};
export default Router;
