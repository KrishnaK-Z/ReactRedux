import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TodoInput extends Component {

    // ntended types of properties passed to components
    static propTypes = {
        newTodo: PropTypes.bool,
        editing: PropTypes.bool,
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        placeholder: PropTypes.string,
        onEsec: PropTypes.func,
    }

    state = {
        text: this.props.text || ''
    }

    handleSubmit = (event) => {
        var value = event.target.value.trim();
        if (event.which === 13) {
            this.props.onSave(value);
            if (this.props.newTodo) {
                this.setState({ text: value });
                event.target.value = "";
            }
        } else if (event.which === 27) {
            this.props.onEsec();
        }
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value.trim() });
    }

    handleBlur = (event) => {
        if (!this.props.newTodo) {
            this.props.onSave(event.target.value.trim());
        }
    }

    render() {
        return (
            <input className = {
                classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                })
            }
            type = "text"
            placeholder = { this.props.placeholder }
            autoFocus = { true }
            value = { this.state.text }
            onKeyDown = { this.handleSubmit }
            onChange = { this.handleChange }
            />
        );
    }
}