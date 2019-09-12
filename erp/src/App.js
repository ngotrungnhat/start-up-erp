import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import routers from './routers'

// eslint-disable-next-line no-shadow
const AppRoute = ({ component: Component, ...rest }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...rest} render={routeProps => <Component {...routeProps} />} />
) // https://reacttraining.com/react-router/web/api/Route/render-func

const App = () => (
    <BrowserRouter>
        <Switch>
            {routers.map((element, index) => (
                <AppRoute
                    exact
                    path={element.path}
                    component={element.component}
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                />
            ))}
        </Switch>
    </BrowserRouter>
)

export default App
