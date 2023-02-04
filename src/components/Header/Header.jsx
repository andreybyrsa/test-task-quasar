import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import IconsPaths from '../Icon/IconsPaths';
import Typography from '../Typography/Typography';
import colors from '../../assets/styles/colors';

import './Header.scss';
import TypographyVariantsTypes from "../Typography/TypographyVariants.types";

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
        <Icon
          iconPath={IconsPaths.headerLogo}
          size={32}
          viewBox={32}
          color={colors.primary}
        />
        <Typography
          className="header__logo-title"
          color={colors.primary}
        >
          LifeTest
        </Typography>
      </div>
      <div className="header__tracker">
        <div className="header__tracker-task">
          <Typography
            variant={TypographyVariantsTypes.Text_regular}
            color={colors.gray_100}
          >
            Сделать UI-kit
          </Typography>
          <Icon
            iconPath={IconsPaths.stop}
            color={colors.primary}
          />
        </div>
        <div className="header__tracker-timer">
          <Typography>Сегодня:</Typography>
          <Typography
            variant={TypographyVariantsTypes.Time_regular}
          >
            0:20:42
          </Typography>
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  className: '',
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
