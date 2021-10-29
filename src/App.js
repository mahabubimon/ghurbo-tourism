import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Contact from "./components/pages/home/contact/Contact";
import Home from "./components/pages/home/home/Home";
import Login from "./components/pages/login/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
