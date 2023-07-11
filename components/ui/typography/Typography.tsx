import styles from './Typography.module.scss'
import cn from 'classnames'
import { TypographyProps } from './Typography.props'

export const Typography = ({ children, variant }: TypographyProps) => {
  return (
    <p
      className={cn(styles.typography, {
        [styles.typography__violet]: variant === 'violet',
        [styles.typography__lgreen]: variant === 'lgreen',
        [styles.typography__orange]: variant === 'orange',
        [styles.typography__blue]: variant === 'blue',
        [styles.typography__lorange]: variant === 'lorange',
        [styles.typography__green]: variant === 'green',
      })}
    >
      {children}
    </p>
  )
}
