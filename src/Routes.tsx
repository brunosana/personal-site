import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './Components/Menu';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PortifolioPage from './pages/Portifolio';
import SocialPage from './pages/Social';

const Routes: React.FC = () => {
    return(
        <>
        <Menu />
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/portifolio" component={PortifolioPage}/>
            <Route path="/social" component={SocialPage}/>
        </Switch>
        </>
    );
}

export default Routes;