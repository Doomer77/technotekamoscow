import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { navHeader } from '../../utils/routes'
import styles from './BurgerMenu.module.scss'
import { BurgerMenuInterface } from './BuregerMenu.props'

export const BurgerMenu = ({ nav }: BurgerMenuInterface): JSX.Element => {
  const { pathname }: NextRouter = useRouter()
  return (
    <nav className={nav === true ? styles.nav_active : styles.nav}>
      <div className={styles.phone_box}>
        <a className={styles.phone_link} href="tel:+74993993289">
          +7 (499) 399-32-89
        </a>
      </div>

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
  )
}
