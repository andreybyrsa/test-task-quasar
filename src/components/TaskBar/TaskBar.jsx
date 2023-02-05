import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Typography from '../Typography/Typography'
import TypographyVariantsTypes from '../Typography/TypographyVariants.types'
import CheckboxInput from '../Inputs/CheckboxInput/CheckboxInput'
import colors from '../../assets/styles/colors'
import Icon from '../Icon/Icon'
import IconsPaths from '../Icon/IconsPaths'

import { removeTodo } from '../../store/reducers/todos/todosSlice'
import { useDispatch, useSelector } from 'react-redux'

import './TaskBar.scss'

function TaskBar({ className, task }) {
  const TaskBarClassName = classNames('task-bar', className)
  const todos = useSelector((state) => state.todosStore.todos)
  const dispatch = useDispatch()

  const removeCurrentTodo = () => {
    const currentIndex = todos.findIndex((elem) => elem.id === task.id)
    dispatch(removeTodo(currentIndex))
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
            00:20:15
          </Typography>
        </div>
        <Icon
          iconPath={IconsPaths.stop}
          color={colors.primary}
        />
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
      <button className="task-bar__action-button">
        <CheckboxInput task={task} />
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
