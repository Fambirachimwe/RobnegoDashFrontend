
import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from "views/examples/Login";
import Register from "views/examples/Register";
import { render } from 'react-dom';


const queryClient = new QueryClient();
const root = document.getElementById('root');
render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>



          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />

          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/register" render={() => <Register />} />

          <Redirect from="/" to="/admin/index" />






        </Switch>
      </BrowserRouter>

    </QueryClientProvider>
  </StrictMode>,
  root
);










