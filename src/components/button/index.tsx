import 'papercss'

import React, { useCallback } from 'react'

import Link from '../link'
import className from '../../utils/className'

export interface ButtonProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onClick'> {
  outline?: boolean
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'large' | 'default' | 'small' | 'block'
  href?: string
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export default function Button({ color = 'primary', size = 'default', outline = false, disabled, children, onClick, href, ...props }: ButtonProps) {
  const handleClick = useCallback(() => {
    if (disabled) {
      return
    }
  }, [disabled, onClick])

  if (href != null) {
    return (
      <Link href={disabled ? undefined : href}
        className={className({ disabled }, ['paper-btn', `btn-${size}`, `btn-${color}${outline ? '-outline' : ''}`])}
        onClick={handleClick}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type="button"
      className={className({ disabled }, ['paper-btn', `btn-${size}`, `btn-${color}${outline ? '-outline' : ''}`])}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}
