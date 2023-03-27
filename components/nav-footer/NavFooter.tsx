import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { navFooter } from '../../utils/routes'
import styles from './NavFooter.module.css'

export const NavFooter = (): JSX.Element => {
  const { pathname }: NextRouter = useRouter()
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {navFooter.map(({ id, title, path }) => (
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
