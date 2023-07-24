import Image from 'next/image'
import styles from './Burger.module.scss'
import openIcon from '../../assets/images/png/open-icon.png'
import closeIcon from '../../assets/images/png/close-icon.png'
import { BurgerInterface } from './Burger.props'
import { Col } from 'react-bootstrap'

export const Burger = ({ nav, onClick }: BurgerInterface) => {
  return (
    <Col xxl={1} xl={1}>
      <div className={styles.burger_block} onClick={onClick}>
        {nav === true ? (
          <Image className={styles.burger_icon} src={closeIcon} alt="" />
        ) : (
          <Image className={styles.burger_icon} src={openIcon} alt="" />
        )}
      </div>
    </Col>
  )
}
