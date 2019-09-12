import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import shortid from 'shortid'
import './App.css'
import routes from './routers'

// eslint-disable-next-line no-shadow
const AppRoute = ({ component: Component, ...rest }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...rest} render={routeProps => <Component {...routeProps} />} />
) // https://reacttraining.com/react-router/web/api/Route/render-func

const App = () => (
    <BrowserRouter>
        <Switch>
            {routes.map(element => (
                <AppRoute
                    exact
                    path={element.path}
                    component={element.component}
                    key={shortid.generate()}
                />
            ))}
        </Switch>
    </BrowserRouter>
)

export default App
