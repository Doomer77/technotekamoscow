import Link from 'next/link'
import { navHeader } from '../../utils/routes'
import LogoIcon from '../../assets/images/logo.svg'
import styles from './Logo.module.css'

export const Logo = (): JSX.Element => {
  return (
    <div className={styles.logo_box}>
      <Link href={navHeader[0].path} className={styles.logo_box_link}>
        <div className={styles.logo_box_logo}>
          <LogoIcon className={styles.logo} />
        </div>
        <div className={styles.logo_box_text}>
          <p className={styles.text_big}>
            Technoteka<span className={styles.text_big_mod}>Moscow</span>
          </p>
          <p className={styles.text_small}>
            Выездной сервис по ремонту и <br /> продаже техники
          </p>
        </div>
      </Link>
    </div>
  )
}
