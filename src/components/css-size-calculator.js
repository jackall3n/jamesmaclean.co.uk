import React, { useState } from 'react';

const INITIAL_STATE = {
  breakpoints: 4,
  values: 10,
  classes: 10,
};

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
          <label htmlFor="breakpoints">Breakpoints:</label>
          <input
            name="breakpoints"
            type="number"
            min="1"
            max="10"
            value={breakpoints}
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="values">Values:</label>
          <input
            name="values"
            type="number"
            min="1"
            max="20"
            value={values}
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="classes">Classes:</label>
          <input
            name="classes"
            type="number"
            min="1"
            max="20"
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
