import React from 'react';
import classNames from 'classnames';
import CheckboxInput from '../Inputs/CheckboxInput/CheckboxInput';
import Typography from '../Typography/Typography';
import colors from '../../assets/styles/colors';

import './Task.scss';
import PropTypes from "prop-types";
import TypographyVariantsTypes from "../Typography/TypographyVariants.types";

function Task(
  className,
) {

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
          Сделать UI-kit
        </Typography>
      </div>

      <Typography
        variant={TypographyVariantsTypes.Time_regular}
        color={colors.gray_80}
      >
        03:12:12
      </Typography>
    </div>
  );
}

Task.defaultProps = {
  className: '',
};

Task.propTypes = {
  className: PropTypes.string,
};

export default Task;
