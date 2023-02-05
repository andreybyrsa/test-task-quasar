import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import CheckboxInput from '../Inputs/CheckboxInput/CheckboxInput'
import Typography from '../Typography/Typography'
import colors from '../../assets/styles/colors'
import PropTypes from 'prop-types'
import TypographyVariantsTypes from '../Typography/TypographyVariants.types'

import { setState } from '../../store/reducers/todos/todosSlice'
import { useDispatch, useSelector } from 'react-redux'

import './Task.scss'

function Task({ className, onClick, taskName, task, trackedTime }) {
  const TaskClassName = classNames('task', className)
  const [checked, setChecked] = useState(false)

  const todos = useSelector((state) => state.todosStore.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    setChecked(task.state)
  }, [task.state])

  const setCheckedState = () => {
    const currentIndex = todos.findIndex((elem) => elem.id === task.id)
    dispatch(setState(currentIndex))
    setChecked((prevState) => !prevState)
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={TaskClassName}
    >
      <div className="task__name">
        <CheckboxInput
          onClick={setCheckedState}
          state={checked}
          task={task}
        />
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
    </button>
  )
}

Task.defaultProps = {
  className: '',
  onClick: () => null,
  taskName: '',
  task: {},
  trackedTime: 0,
}

Task.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  taskName: PropTypes.string,
  task: PropTypes.object,
  trackedTime: PropTypes.number,
}

export default Task
