import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import TaskInput from '../Inputs/TaskInput/TaskInput'
import TaskBar from '../TaskBar/TaskBar'
import Task from '../Task/Task'

import { useSelector } from 'react-redux'

import './AppLayout.scss'

function AppLayout({ className, contentClassName, taskBarClassName }) {
  const [currentTaskId, setCurrentTaskId] = useState(-1)
  const todos = useSelector((state) => state.todosStore.todos)

  useEffect(() => {
    if (todos.length === 0) {
      setCurrentTaskId((prevState) => prevState * -1)
    }
    if (todos.length > 0) {
      setCurrentTaskId(0)
    }
  }, [todos])

  const AppLayoutClassName = classNames('app-layout', className)
  const AppLayoutContentClassName = classNames('app-layout__content', contentClassName)
  const AppLayoutTaskBarClassName = classNames('app-layout__task-bar', taskBarClassName)

  const showCurrentTaskBar = (taskId) => {
    const currentIndex = todos.findIndex((elem) => elem.id === taskId)
    setCurrentTaskId(currentIndex)
  }

  return (
    <div className={AppLayoutClassName}>
      <div className={AppLayoutContentClassName}>
        <TaskInput />
        {todos.map((elem) => (
          <Task
            key={elem.id}
            onClick={() => showCurrentTaskBar(elem.id)}
            task={elem}
            taskName={elem.todo}
            trackedTime={elem.trackedTime}
          />
        ))}
      </div>
      {todos.length > 0 && currentTaskId >= 0 ? (
        <div className={AppLayoutTaskBarClassName}>
          <TaskBar task={todos[currentTaskId]} />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

AppLayout.defaultProps = {
  className: '',
  contentClassName: '',
  taskBarClassName: '',
  children: null,
}

AppLayout.propTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  taskBarClassName: PropTypes.string,
  children: PropTypes.array,
}

export default AppLayout
