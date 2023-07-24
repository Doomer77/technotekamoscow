import { ButtonProps } from './Button.props'
import styles from './Button.module.scss'
import cn from 'classnames'

export const Button = ({ children, variant }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.violet]: variant === 'violet',
        [styles.lgreen]: variant === 'lgreen',
        [styles.orange]: variant === 'orange',
        [styles.blue]: variant === 'blue',
        [styles.lorange]: variant === 'lorange',
        [styles.green]: variant === 'green',
      })}
    >
      {children}
    </button>
  )
}
