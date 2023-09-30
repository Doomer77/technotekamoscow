import { HeaderProps } from './Header.props'
import { NavHeader } from '../../nav-header/NavHeader'
import { Logo } from '../../logo/Logo'
import { FeedBack } from '../../feedback/FeedBack'
import { Burger } from '../../burger/Bureger'
import { useState } from 'react'
import { BurgerMenu } from '../../bureger-menu/BuregerMenu'
import { Container, Row } from 'react-bootstrap'
import styles from './Header.module.scss'

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const [nav, setNav] = useState(false)

  return (
    <header className={styles.header} {...props}>
      <Logo />
      <NavHeader />
      <FeedBack />
      <Burger nav={nav} onClick={() => setNav(!nav)} />
      <BurgerMenu nav={nav} />
    </header>
  )
}
