import React from "react"
import 'papercss'

import className from '../../utils/className'

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  outline?: boolean
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'large' | 'default' | 'small' | 'block'
}

/**
 * Primary UI component for user interaction
 */
export default function Button({ color = 'primary', size = 'default', outline = false, disabled, children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={className({ disabled }, ['paper-btn', `btn-${size}`, `btn-${color}${outline ? '-outline' : ''}`])}

      {...props}
    >
      {children}
    </button>
  )
}
