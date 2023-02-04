import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../../Icon/Icon';
import IconsPaths from '../../Icon/IconsPaths';
import colors from '../../../assets/styles/colors';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { setState } from '../../../store/reducers/todos/todosSlice';

import './CheckboxInput.scss';

function CheckboxInput({
  className,
  task,
}) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const CheckboxInputClassName = classNames(
    'checkboxInput',
    checked ? 'checkboxInput--checked' : '',
    className,
  );

  const setCheckedState = () => {
    dispatch(setState((task.id - 1)));
    setChecked(prevState => !prevState);
  }

  return (
    <div
      className={CheckboxInputClassName}
      onClick={setCheckedState}
    >
      {checked &&
        <Icon
          viewBox={35}
          iconPath={IconsPaths.done}
          color={colors.gray_0}
        />
      }
    </div>
  )
}

CheckboxInput.defaultProps = {
  className: '',
  task: {},
};

CheckboxInput.propTypes = {
  className: PropTypes.string,
  task: PropTypes.object,
};

export default CheckboxInput;
