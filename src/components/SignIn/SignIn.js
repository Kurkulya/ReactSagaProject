import './SignIn.css';
import React, { Component } from 'react';
import BackButton from '../BackButton';
import logo from '../../logo.svg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">SignIn</h1>
                    <BackButton/>
                </header>
            </div>
        );
    }
}

export default App;
