import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { nav } from '../../utils/routes'
import styles from './Navigation.module.css'

export const Navigation = (): JSX.Element => {
  const { pathname }: NextRouter = useRouter()
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {nav.slice(1).map(({ id, title, path }) => (
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
