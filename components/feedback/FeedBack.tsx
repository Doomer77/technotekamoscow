import { Col } from 'react-bootstrap'
import styles from './FeedBack.module.scss'

export const FeedBack = (): JSX.Element => {
  return (
    <Col xxl={4} xl={4} md={4} sm={4} className="ms-auto">
      <div className={styles.user_box}>
        <div className={styles.phone_box}>
          <a className={styles.phone_link} href="tel:+74993993289">
            +7 (499) 399-32-89
          </a>
        </div>
        <div className={styles.user_feedback_box}>
          <button className={styles.user_feedback_button}>
            Связаться с нами
          </button>
        </div>
      </div>
    </Col>
  )
}
