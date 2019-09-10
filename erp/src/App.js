import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { routers } from "./routers";

const AppRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={routeProps => <Component {...routeProps} />} />
); //https://reacttraining.com/react-router/web/api/Route/render-func

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            { routers.map((element, index) => (
              <AppRoute
                exact
                path={element.path}
                component={element.component}
                key={index}
              />
            ))}
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
