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
  style,
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
      style={{...customStyle, ...style}}
      className={TypographyClassName}
    >
      {children}
    </p>
  );
}

Typography.defaultProps = {
  className: '',
  variant: TypographyVariantsTypes.Text_regular,
  children: '',
  color: null,
  style: {},
};

Typography.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(TypographyVariantsTypes)),
  children: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};

export default Typography;
