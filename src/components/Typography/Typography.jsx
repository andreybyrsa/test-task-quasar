import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TypographyVariantsTypes from './TypographyVariants.types';
import './Typography.scss';

function Typography({
  className,
  variant,
  children,
  color,
}) {
  const TypographyClassName = classNames(
    'typography',
    `typography-${variant}`,
    className,
  );
  let customStyle;
  if (color) {
    customStyle = {
      color: color,
    };
  }
  return (
    <p
      style={customStyle}
      className={TypographyClassName}
    >
      {children}
    </p>
  );
}

Typography.defaultProps = {
  className: '',
  variant: TypographyVariantsTypes.Text_regular,
  children: null,
  color: null,
};

Typography.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(TypographyVariantsTypes)),
  children: PropTypes.string,
  color: PropTypes.string,
};

export default Typography;
