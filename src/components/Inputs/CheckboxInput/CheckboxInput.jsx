import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../../Icon/Icon';
import IconsPaths from '../../Icon/IconsPaths';
import colors from '../../../assets/styles/colors';
import PropTypes from 'prop-types';

import './CheckboxInput.scss';

function CheckboxInput(
  className,
) {
  const [checked, setChecked] = useState(false);

  const CheckboxInputClassName = classNames(
    'checkboxInput',
    checked ? 'checkboxInput--checked' : '',
    className,
  );

  const setCheckedState = () => {
    setChecked(prevState => !prevState);
  }

  return (
    <button
      className={CheckboxInputClassName}
      onClick={setCheckedState}
      type="button"
    >
      {checked &&
        <Icon
          viewBox={35}
          iconPath={IconsPaths.done}
          color={colors.gray_0}
        />
      }
    </button>
  )
}

CheckboxInput.defaultProps = {
  className: '',
};

CheckboxInput.propTypes = {
  className: PropTypes.string,
};

export default CheckboxInput;
