import React, { useState } from 'react';

const INITIAL_STATE = {
  breakpoints: 4,
  values: 10,
  classes: 10,
};

const InputField = ({ value, onChange, label, name, min = 1, max = 20, type = "number" }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  </>
);

const Calculator = () => {

  const [state, setState] = useState(INITIAL_STATE);
  const { breakpoints, values, classes } = state;

  const handleChange = event => {
    const { name, value } = event.target;

    setState({
      breakpoints,
      values,
      classes,
      [name]: value,
    });
  };

  const onReset = () => {
    setState(INITIAL_STATE);
  };

  return (
    <>
      <ol>
        <li>
          <InputField
            label="Breakpoints:"
            name="breakpoints"
            value={breakpoints}
            onChange={handleChange}
            max={10}
          />
        </li>
        <li>
          <InputField
            label="Values:"
            name="values"
            value={values}
            onChange={handleChange}
          />
        </li>
        <li>
          <InputField
            label="Classes:"
            name="classes"
            value={classes}
            onChange={handleChange}
          />
        </li>
      </ol>
      <h4>Total CSS classes: {values * classes * breakpoints}</h4>
      <button onClick={onReset}>Reset</button>
    </>
  );
};
