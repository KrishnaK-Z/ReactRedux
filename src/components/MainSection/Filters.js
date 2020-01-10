import React, { Component } from 'react';
import Select from 'react-select';

const colourOptions = [
    { value: 'open', label: 'Open' },
    { value: 'completed', label: 'Completed' },
    { value: 'under review', label: 'Review' },
  ];

const colourStyles = {
control: styles => (
    { 
        ...styles, 
        backgroundColor: '#282828', 
        color: '#F1F1F1',
        borderColor: '#282828',
        padding: '0.3em 0em',
        ':hover': {
            borderColor: '#282828'
        }
    }),
option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
        ...styles,
        color: '#282828'
    };
    },
    multiValue: (styles, { data }) => {
    return {
        ...styles,
        backgroundColor: '#5A5A5A'
    };
    },
    multiValueLabel: (styles, { data }) => ({
    ...styles,
        color: '#F1F1F1'
    }),
    multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: '#F1F1F1',
    ':hover': {
        backgroundColor: '#202020',
        color: 'white',
    },
    }),
    
};


export default class Filters extends Component {
  render() {
    return (
      <div className="select-filter">
          <h2>Filter By : </h2>
          <Select
                closeMenuOnSelect={false}
                isMulti
                options={colourOptions}
                styles={colourStyles}
            />
      </div>
    );
  }
}
