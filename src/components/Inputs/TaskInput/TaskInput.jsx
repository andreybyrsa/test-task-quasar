import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../../Icon/Icon'
import IconsPaths from '../../Icon/IconsPaths'
import colors from '../../../assets/styles/colors'

import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../../store/reducers/todos/todosSlice'

import './TaskInput.scss'

function TaskInput({ className }) {
  const [value, setValue] = useState('')
  const todos = useSelector((state) => state.todosStore.todos)
  const dispatch = useDispatch()

  const TaskInputClassName = classNames('task-input', className)

  useEffect(() => {
    if (todos.length < 1) {
      setValue('')
    } else {
      setValue(todos[todos.length - 1].todo)
    }
  }, [todos])

  const submitHandler = (event) => {
    event.preventDefault()
    const maxId = todos
      .map((elem) => elem.id)
      .reduce((maxId, currentId) => (currentId > maxId ? currentId : maxId), 0)
    if (value) {
      dispatch(
        addTodo({
          id: maxId + 1,
          todo: value,
          state: false,
          trackedTime: localStorage.getItem(maxId + 1) ? localStorage.getItem(maxId + 1) : '',
        }),
      )
    }
  }
  const changeHandler = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className={TaskInputClassName}>
      <Icon
        iconPath={IconsPaths.plus}
        color={colors.gray_80}
      />
      <form
        style={{ width: '100%', height: '100%' }}
        onSubmit={submitHandler}
      >
        <input
          className="task-input__field"
          onChange={changeHandler}
          value={value}
          type="text"
          placeholder="Добавить задачу"
        />
      </form>
    </div>
  )
}

TaskInput.defaultProps = {
  className: '',
}

TaskInput.propTypes = {
  className: PropTypes.string,
}

export default TaskInput
