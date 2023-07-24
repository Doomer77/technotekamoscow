import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { navHeader } from '../../utils/routes'
import styles from './NavHeader.module.scss'
import { Col } from 'react-bootstrap'

export const NavHeader = (): JSX.Element => {
  const { pathname }: NextRouter = useRouter()
  return (
    <Col xxl={4} xl={4} md={4} sm={4}>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          {navHeader.slice(1).map(({ id, title, path }) => (
            <li key={id} className={styles.nav_item}>
              <Link
                href={path}
                className={
                  pathname === path ? styles.nav_link_active : styles.nav_link
                }
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Col>
  )
}
