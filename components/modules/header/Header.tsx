import { HeaderProps } from './Header.props'
import { NavHeader } from '../../nav-header/NavHeader'
import { Logo } from '../../logo/Logo'
import { FeedBack } from '../../feedback/FeedBack'
import styles from './Header.module.css'

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <Logo />
      <NavHeader />
      <FeedBack />
    </header>
  )
}
