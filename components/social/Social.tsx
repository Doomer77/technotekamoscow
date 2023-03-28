import Link from 'next/link'
import { navSocial } from '../../utils/social'
import styles from './Social.module.css'

export const Social = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {navSocial.map(({ id, path, Icon }) => (
          <li key={id} className={styles.nav_item}>
            <Link href={path} className={styles.nav_link}>
              <Icon />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
