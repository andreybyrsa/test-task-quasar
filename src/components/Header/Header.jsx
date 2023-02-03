import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import IconsPaths from '../Icon/IconsPaths';
import Typography from '../Typography/Typography';
import colors from '../../assets/styles/colors';

import './Header.scss';

function Header(
  className,
) {
  const HeaderClassName = classNames(
    'header',
    className
  );
  return (
    <div className={HeaderClassName}>
      <div className="header__logo">
        <Icon iconPath={IconsPaths.headerLogo} size={32} viewBox={32} color={colors.primary} />
        <Typography className="header__logo-title" color={colors.primary}>LifeTest</Typography>
      </div>
      <div className="header__interface-tracker">

      </div>
    </div>
  );
}

export default Header;
