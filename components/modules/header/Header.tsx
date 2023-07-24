import { HeaderProps } from './Header.props'
import { NavHeader } from '../../nav-header/NavHeader'
import { Logo } from '../../logo/Logo'
import { FeedBack } from '../../feedback/FeedBack'
import { Burger } from '../../burger/Bureger'
import { useState } from 'react'
import styles from './Header.module.scss'
import { BurgerMenu } from '../../bureger-menu/BuregerMenu'
import { Container, Row } from 'react-bootstrap'

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const [nav, setNav] = useState(false)

  return (
    <header className={styles.header} {...props}>
      <Container>
        <Row className="d-flex align-items-center">
          <Logo />
          <NavHeader />
          <FeedBack />
          <Burger nav={nav} onClick={() => setNav(!nav)} />
          <BurgerMenu nav={nav} />
        </Row>
      </Container>
    </header>
  )
}
