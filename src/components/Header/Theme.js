import React, { Component } from 'react';

export default class Theme extends Component {
    render() {
        return (
            <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="slider round"></div>
                </label>
            </div>
        );
    }
}