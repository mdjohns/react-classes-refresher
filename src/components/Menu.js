import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function Menu({ choices }) {
  return (
    <ul>
      {choices.map((choice, i) => {
        const { name, path } = choice;
        return (
          <li key={i}>
            <Link to={path}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

Menu.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.object).isRequired,
};
