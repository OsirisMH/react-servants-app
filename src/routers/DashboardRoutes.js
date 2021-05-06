import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Navbar } from '../components/ui/Navbar';

import { SaberScreen } from '../components/saber/SaberScreen';
import { CasterScreen } from '../components/caster/CasterScreen';
import { ServantScreen } from '../components/servant/ServantScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/saber" component={SaberScreen} />
                    <Route exact path="/caster" component={CasterScreen} />
                    <Route exact path="/servant/:servantId" component={ServantScreen} />
                    <Route exact path="/search" component={SearchScreen} />

                    <Redirect to="/saber" />
                </Switch>
            </div>
        </>
    )
};
