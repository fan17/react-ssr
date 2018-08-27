import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import HomeContainer from '../home/HomeContainer';
import AboutContainer from '../about/AboutContainer';
import BoxContainer from '../box/BoxContainer';

class AppComponent extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/box">Box</Link></li>
                </ul>
                <hr />
                <div>
                    <Switch>
                        <Route path="/about" component={AboutContainer} />
                        <Route path="/home" component={HomeContainer} />
                        <Route path="/box" component={BoxContainer} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default AppComponent;
