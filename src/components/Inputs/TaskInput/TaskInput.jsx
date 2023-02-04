import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';
import IconsPaths from '../../Icon/IconsPaths';
import colors from '../../../assets/styles/colors';

import './TaskInput.scss';

function TaskInput(
  className,
) {

  const TaskInputClassName = classNames(
    'task-input',
    className,
  );
  return (
    <div className={TaskInputClassName}>
      <Icon
        iconPath={IconsPaths.plus}
        color={colors.gray_80}
      />
      <input
        className="task-input__field"
        type="text"
      />
    </div>
  );
}

TaskInput.defaultProps = {
  className: '',
};

TaskInput.propTypes = {
  className: PropTypes.string,
};

export default TaskInput;
