import { Route } from 'react-router';
import React from 'react';
import App from '../components/App';
import Posts from '../components/Posts';
import SignIn from '../components/SignIn';

export default () => {
    return (
        <React.Fragment>
            <Route exact path='/' component={App}/>
            <Route path='/sign_in' component={SignIn}/>
            <Route path='/posts' component={Posts}/>
        </React.Fragment>
    );
}