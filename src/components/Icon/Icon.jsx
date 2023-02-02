import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import IconsPaths from './IconsPaths';

import './Icon.scss';

function Icon({
  className,
  iconPath,
  viewBox,
  size,
  width,
  height,
  color,
}) {
  const [translatePathY, setTranslatePathY] = useState(0);
  const [translatePathX, setTranslatePathX] = useState(0);
  const IconClassName = classNames(
    'icon',
    className,
  );
  let customSize = {
    minWidth: `${size}px`,
    minHeight: `${size}px`,
    maxWidth: `${size}px`,
    maxHeight: `${size}px`,
  };
  if (width && height) {
    customSize = {
      minWidth: `${width}px`,
      minHeight: `${height}px`,
      maxWidth: `${width}px`,
      maxHeight: `${height}px`,
    }
  }
  const translatePathById = useCallback(
    (id) => {
      const currentPath = document.getElementById(id);
      setTranslatePathY((viewBox - currentPath.getBBox().height) / 2 - currentPath.getBBox().y);
      setTranslatePathX((viewBox - currentPath.getBBox().width) / 2 - currentPath.getBBox().x);
    },
    [viewBox],
  )
  useEffect(() => {
    if (iconPath.props.children) {
      iconPath.props.children.forEach((elem) => {
        translatePathById(elem.props.id);
      })
    } else {
      translatePathById(iconPath.props.id);
    }
  }, [iconPath.props, translatePathById]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={IconClassName}
      style={customSize}
      color={color}
      viewBox={`${-translatePathX} ${-translatePathY} ${viewBox} ${viewBox}`}
      fill="none"
    >
      {iconPath}
    </svg>
  );
}

Icon.defaultProps = {
  className: '',
  iconPath: IconsPaths.archive,
  viewBox: 24,
  size: 24,
  width: null,
  height: null,
  color: colors.gray_0,
};

Icon.propTypes = {
  className: PropTypes.string,
  iconPath: PropTypes.oneOf(Object.values(IconsPaths)),
  viewBox: PropTypes.number,
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
