import React, { Component } from 'react';

export default class Theme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
        };
        this.toggleTheme = this.toggleTheme.bind(this);
        // this.toggleTheme();
    }

    toggleTheme() {
        const theme = this.state.theme === 'dark' ? 'light' : 'dark';
        this.setState({ theme });
        
        document.documentElement.classList.add('theme-transition');
        document.documentElement.setAttribute('data-theme', theme);
        window.setTimeout(function() {
        document.documentElement.classList.remove('theme-transition')
        }, 1000);
    }

    render() {
        return (
            <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" onChange={this.toggleTheme}/>
                    <div className="slider round"></div>
                </label>
            </div>
        );
    }
}