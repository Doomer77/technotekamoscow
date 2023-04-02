import Link from 'next/link'
import { navHeader } from '../../utils/routes'
import logoIcon from '../../assets/images/png/logo-icon.png'
import styles from './Logo.module.css'
import Image from 'next/image'

export const Logo = (): JSX.Element => {
  return (
    <div className={styles.logo_box}>
      <Link href={navHeader[0].path} className={styles.logo_box_link}>
        <div className={styles.logo_box_logo}>
          <Image
            src={logoIcon}
            alt="TechnotekaMoscow - выездной сервис по ремонту и продаже техники брендов: Apple, Sumsung, Xiaomi, Huawei, Vivo,
                    Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony..."
            className={styles.logo}
          />
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
