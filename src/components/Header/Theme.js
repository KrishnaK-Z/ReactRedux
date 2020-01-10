import React, { Component } from 'react';

export default class Theme extends Component {
    render() {
        return (
            <ul className="radio-switch">
                <li className="radio-switch__item">
                    <input className="radio-switch__input sr-only" type="radio" name="radioButton" id="dark" checked/>
                    <label className="radio-switch__label" for="radio1">Dark</label>
                </li>

                <li class="radio-switch__item">
                    <input class="radio-switch__input sr-only" type="radio" name="radioButton" id="light"/>
                    <label class="radio-switch__label" for="radio2">Light</label>
                    <div aria-hidden="true" class="radio-switch__marker"></div>
                </li>
            </ul>
        );
    }
}