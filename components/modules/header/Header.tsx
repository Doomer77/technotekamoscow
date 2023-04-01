import { HeaderProps } from './Header.props'
import { NavHeader } from '../../nav-header/NavHeader'
import { Logo } from '../../logo/Logo'
import { FeedBack } from '../../feedback/FeedBack'
import styles from './Header.module.css'
import { Burger } from '../../burger/Bureger'
import { useState } from 'react'

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const [nav, setNav] = useState(false)

  return (
    <header className={styles.header} {...props}>
      <Logo />
      <NavHeader />
      <FeedBack />
      <Burger nav={nav} onClick={() => setNav(!nav)} />
    </header>
  )
}
