import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '../Typography/Typography';
import TypographyVariantsTypes from '../Typography/TypographyVariants.types';
import ButtonTypes from './ButtonTypes.types';

import './Button.scss';

function Button({
  className,
  icon,
  children,
  type,
  state,
  onClick,
}) {
  const ButtonClassName = classNames(
    'button',
    `button-${type}`,
    state ? `button--${state}` : '',
    className,
  );
  return (
    <button
      className={ButtonClassName}
      type="button"
      onClick={onClick}
      disabled={state === 'primary-disable' || 'secondary-disable'}
    >
      {icon ? icon : <></>}
      <Typography variant={TypographyVariantsTypes.Title_h2_medium} className="button__text">{children}</Typography>
    </button>
  );
}

Button.defaultProps = {
  className: '',
  icon: null,
  children: null,
  type: ButtonTypes.Primary,
  state: null,
  onClick: () => null,
};

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.string,
  type: PropTypes.oneOf(Object.values(ButtonTypes)),
  state: PropTypes.oneOf([
    'primary-hover',
    'secondary-hover',
    'primary-disable',
    'secondary-disable',
    'primary-focus',
    'secondary-focus',
  ]),
  onClick: PropTypes.func,
};

export default Button;
