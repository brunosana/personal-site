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
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/portifolio" exact component={PortifolioPage}/>
            <Route path="/social" exact component={SocialPage}/>
            <Route path="/" component={HomePage}/>
        </Switch>
        </>
    );
}

export default Routes;