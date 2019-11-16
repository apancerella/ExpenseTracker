/**
 * The App component. This will render the base App component.
 * @author Anthony P. Pancerella
 */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotificationContainer from './NotificationContainer';
import NavigationContainer from './NavigationContainer';
import PageNotFound from './PageNotFound';
import Home from '../../../Home/components/Dashboard';
import { useDocumentTitle } from '../../../../Lib/CustomHooks';
import AppConfigs from '../../../../Constants';
import './style.css';

/**
 * The App component.
 * @returns {React.Element} the React component data
 */
const App = () => {
    useDocumentTitle(`${AppConfigs.appName}`);
    return (
        <div className="appContainer">
            <Router>
                <NotificationContainer />
                <NavigationContainer />
                <Switch>
                    <Route exact path={`${AppConfigs.siteCollectionPath}/`} render={() => <Home />} />
                    <Route path={`${AppConfigs.siteCollectionPath}/Home`} render={() => <Home />} />
                    <Route render={() => <PageNotFound />} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
