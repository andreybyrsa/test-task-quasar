import React from 'react'
import classNames from 'classnames'
import Icon from '../../Icon/Icon'
import IconsPaths from '../../Icon/IconsPaths'
import colors from '../../../assets/styles/colors'
import PropTypes from 'prop-types'

import './CheckboxInput.scss'

function CheckboxInput({ className, state, onClick }) {
  const CheckboxInputClassName = classNames(
    'checkboxInput',
    state ? 'checkboxInput--checked' : '',
    className,
  )

  return (
    <div
      onClick={onClick}
      className={CheckboxInputClassName}
    >
      {state && (
        <Icon
          viewBox={35}
          iconPath={IconsPaths.done}
          color={colors.gray_0}
        />
      )}
    </div>
  )
}

CheckboxInput.defaultProps = {
  className: '',
  task: {},
  state: false,
  onClick: () => null,
}

CheckboxInput.propTypes = {
  className: PropTypes.string,
  task: PropTypes.object,
  state: PropTypes.bool,
  onClick: PropTypes.func,
}

export default CheckboxInput
