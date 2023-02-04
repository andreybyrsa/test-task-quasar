import React, {useMemo} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TaskInput from '../Inputs/TaskInput/TaskInput';
import TaskBar from '../TaskBar/TaskBar';

import './AppLayout.scss';

function AppLayout(
  className,
  contentClassName,
  taskBarClassName,
) {
  const AppLayoutClassName = classNames(
    'app-layout',
    className,
  );
  const AppLayoutContentClassName = classNames(
    'app-layout__content',
    contentClassName,
  );
  const AppLayoutTaskBarClassName = classNames(
    'app-layout__task-bar',
    taskBarClassName,
  );

  const taskBar = useMemo(() => {
    return <TaskBar />
  }, []);

  return (
    <div className={AppLayoutClassName}>
      <div className={AppLayoutContentClassName}>
        <TaskInput />
      </div>
      <div className={AppLayoutTaskBarClassName}>
        {taskBar}
      </div>
    </div>
  );
}

AppLayout.defaultProps = {
  className: '',
  contentClassName: '',
  taskBarClassName: '',
  children: null,
};

AppLayout.propTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  taskBarClassName: PropTypes.string,
  children: PropTypes.array,
};

export default AppLayout;
