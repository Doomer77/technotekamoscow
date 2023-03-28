import { NavFooter } from '../../nav-footer/NavFooter'
import { Social } from '../../social/Social'

import styles from './Footer.module.css'
import CopyrightIcon from '../../../assets/images/svg/copyright.svg'

export const Footer = ({ ...props }): JSX.Element => {
  return (
    <footer {...props} className={styles.footer}>
      <div className={styles.footer_copyright}>
        <div className={styles.copyright_icon_box}>
          <CopyrightIcon className={styles.copyright_icon} />
        </div>
        <div className={styles.copyright_text_box}>
          <p className={styles.copyright_text}>
            Copyright TechnotekaMoscow 2023
          </p>
        </div>
      </div>
      <NavFooter />
      <Social />
    </footer>
  )
}
