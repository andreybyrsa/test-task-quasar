import React from 'react';
import classNames from 'classnames';
import CheckboxInput from '../Inputs/CheckboxInput/CheckboxInput';
import Typography from '../Typography/Typography';
import colors from '../../assets/styles/colors';
import PropTypes from 'prop-types';
import TypographyVariantsTypes from '../Typography/TypographyVariants.types';

import './Task.scss';

function Task({
  className,
  taskName,
  trackedTime,
}) {

  const TaskClassName = classNames(
    'task',
    className,
  );

  return (
    <div className={TaskClassName}>
      <div className="task__name">
        <CheckboxInput />
        <Typography
          className="task__name-text"
          color={colors.gray_100}
        >
          {taskName}
        </Typography>
      </div>
      <Typography
        variant={TypographyVariantsTypes.Time_regular}
        color={colors.gray_80}
      >
        {trackedTime === 0 ? '' : trackedTime}
      </Typography>
    </div>
  );
}

Task.defaultProps = {
  className: '',
  taskName: '',
  trackedTime: 0,
};

Task.propTypes = {
  className: PropTypes.string,
  taskName: PropTypes.string,
  trackedTime: PropTypes.number,
};

export default Task;
