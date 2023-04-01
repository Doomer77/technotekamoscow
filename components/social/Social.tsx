import Image from 'next/image'
import Link from 'next/link'
import { navSocial } from '../../utils/social'
import styles from './Social.module.css'

export const Social = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {navSocial.map(({ id, path, alt, icon }) => (
          <li key={id} className={styles.nav_item}>
            <Link href={path} className={styles.nav_link}>
              <Image alt={alt} src={icon} className={styles.nav_link_img} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
