import Image from 'next/image'
import styles from './Burger.module.css'
import openIcon from '../../assets/images/png/open-icon.png'
import closeIcon from '../../assets/images/png/close-icon.png'

export const Burger = ({ nav }) => {
  return (
    <div className={styles.burger_block}>
      {nav === true ? (
        <Image className={styles.burger_icon} src={closeIcon} alt="" />
      ) : (
        <Image className={styles.burger_icon} src={openIcon} alt="" />
      )}
    </div>
  )
}
