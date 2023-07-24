import { Button } from '../button/Button'
import { CardProps } from './Card.props'
import styles from './Card.module.scss'
import cn from 'classnames'
import { Typography } from '../typography/Typography'

export const Card = ({
  heading,
  price,
  textBtn,
  textP,
  variant,
}: CardProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <div
        className={cn(styles.card__img_box, {
          [styles.card__img_box__violet]: variant === 'violet',
          [styles.card__img_box__lgreen]: variant === 'lgreen',
          [styles.card__img_box__orange]: variant === 'orange',
          [styles.card__img_box__blue]: variant === 'blue',
          [styles.card__img_box__lorange]: variant === 'lorange',
          [styles.card__img_box__green]: variant === 'green',
        })}
      >
        <h2 className={styles.card__heading}>{heading}</h2>
      </div>
      <div className={styles.card__content}>
        <Typography variant={variant}>{textP}</Typography>
        <Typography variant={variant}>{price}</Typography>
        <div className={styles.card__btn}>
          <Button variant={variant}>{textBtn}</Button>
        </div>
      </div>
    </div>
  )
}
