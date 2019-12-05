import React, { Fragment } from  'react';
import { Switch, Route } from 'react-router';
import Home from './home';
import DetailsPage from './home/mainContent/DetailsPage';

const App = () => (
    <Fragment>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/item/:id" component={DetailsPage} />
        </Switch>
    </Fragment>
);

export default App;