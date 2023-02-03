import React, { useState } from 'react';
import classNames from 'classnames';

import './CheckboxInput.scss';
import Icon from "../../Icon/Icon";
import IconsPaths from "../../Icon/IconsPaths";
import colors from "../../../assets/styles/colors";

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

export default CheckboxInput;
