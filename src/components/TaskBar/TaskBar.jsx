import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Typography from '../Typography/Typography'
import TypographyVariantsTypes from '../Typography/TypographyVariants.types'
import CheckboxInput from '../Inputs/CheckboxInput/CheckboxInput'
import colors from '../../assets/styles/colors'
import Icon from '../Icon/Icon'
import IconsPaths from '../Icon/IconsPaths'

import { removeTodo, setState, setTime } from '../../store/reducers/todos/todosSlice'
import { useDispatch, useSelector } from 'react-redux'

import './TaskBar.scss'

function TaskBar({ className, task }) {
  const [checked, setChecked] = useState(false)
  const time = localStorage.getItem(`${task.id}`) ? localStorage.getItem(`${task.id}`) : 0
  const [currentTime, setCurrentTime] = useState(+time)
  const [active, setActive] = useState(false)

  const TaskBarClassName = classNames('task-bar', className)
  const todos = useSelector((state) => state.todosStore.todos)
  const dispatch = useDispatch()

  const removeCurrentTodo = () => {
    const confirmResult = window.confirm('Вы действительно хотите удалить задачу?')
    if (confirmResult) {
      const currentIndex = todos.findIndex((elem) => elem.id === task.id)
      localStorage.removeItem(`${task.id}`)
      dispatch(removeTodo(currentIndex))
    }
  }

  useEffect(() => {
    setChecked(task.state)
  }, [task.state])

  const setCheckedState = () => {
    const currentIndex = todos.findIndex((elem) => elem.id === task.id)
    dispatch(setState(currentIndex))
    setChecked((prevState) => !prevState)
  }

  useEffect(() => {
    if (active) {
      const timeInterval = setInterval(() => {
        setCurrentTime((prevState) => prevState + 1)
        localStorage.setItem(`${task.id}`, currentTime.toString())
        dispatch(setTime(task.id))
      }, 1000)
      return () => clearInterval(timeInterval)
    }
  }, [active, currentTime, dispatch, task.id])

  const startTimer = () => {
    setActive(true)
    setCurrentTime(+time)
  }
  const stopTimer = () => {
    setActive(false)
  }

  return (
    <div className={TaskBarClassName}>
      <Typography
        className="task-bar__task-name"
        color={colors.gray_100}
        variant={TypographyVariantsTypes.Title_h1_medium}
      >
        {task.todo}
      </Typography>
      <div className="task-bar__tracker">
        <div>
          <Typography
            style={{ textAlign: 'start' }}
            variant={TypographyVariantsTypes.Text_regular}
            color={colors.gray_80}
          >
            сегодня
          </Typography>
          <Typography
            variant={TypographyVariantsTypes.Time_regular}
            color={colors.gray_100}
          >
            {localStorage.getItem(`${task.id}`) ? localStorage.getItem(`${task.id}`) : '00:00:00'}
          </Typography>
        </div>
        {active ? (
          <button
            onClick={stopTimer}
            className="task-bar__tracker-button"
          >
            <Icon
              iconPath={IconsPaths.stop}
              color={colors.primary}
            />
          </button>
        ) : (
          <button
            onClick={startTimer}
            className="task-bar__tracker-button"
          >
            <Icon
              iconPath={IconsPaths.play}
              color={colors.primary}
            />
          </button>
        )}
        <div>
          <Typography
            style={{ textAlign: 'end' }}
            variant={TypographyVariantsTypes.Text_regular}
            color={colors.gray_80}
          >
            всего
          </Typography>
          <Typography
            variant={TypographyVariantsTypes.Time_regular}
            color={colors.gray_100}
          >
            13:20:15
          </Typography>
        </div>
      </div>
      <button
        onClick={setCheckedState}
        className="task-bar__action-button"
      >
        <CheckboxInput
          task={task}
          state={checked}
        />
        <Typography
          color={colors.primary}
          variant={TypographyVariantsTypes.Title_h2_medium}
        >
          Выполнено
        </Typography>
      </button>
      <button
        onClick={removeCurrentTodo}
        className="task-bar__action-button"
      >
        <Icon
          iconPath={IconsPaths.trash}
          color={colors.error}
        />
        <Typography
          color={colors.error}
          variant={TypographyVariantsTypes.Title_h2_medium}
        >
          Удалить задачу
        </Typography>
      </button>
    </div>
  )
}

TaskBar.defaultProps = {
  className: '',
  task: {},
}

TaskBar.propTypes = {
  className: PropTypes.string,
  task: PropTypes.object,
}

export default TaskBar
