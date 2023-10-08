import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/ui/card/Card'
import { cards } from '../utils/cards'
import devImage from '../assets/images/png/dev-image.png'
import styles from '../styles/Dev.module.scss'
import { Button } from '../components/ui/button/Button'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function WebSiteDev() {
  return (
    <>
      <Head>
        <title>TTM - Разработка сайтов</title>
        <meta
          name="description"
          content="TechnotekaMoscow - IT сервис по разработке, сопровождению и продвижению сайтов и приложений"
        />
        <meta
          name="keywords"
          content="разработка сайтов, продвижение сайтов, сопровождение сайтов, разработка приложений, продвижение приложений, сопровождение приложений"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.dev}>
        <Container className="mb-5">
          <Row className="d-flex justify-content-between">
            <Col xxl={4}>
              <div className={styles.image_box}>
                <Image
                  className={styles.image_box__image}
                  src={devImage}
                  alt="Разработка сайтов, продвижение сайтов,
                                        сопровождение сайтов, разработка приложений,
                                        продвижение приложений, сопровождение приложений"
                />
              </div>
            </Col>
            <Col xxl={8}>
              <div className={styles.text_box}>
                <h1 className={styles.text_box__heading}>
                  Разработка сайтов и приложений
                </h1>
                <p className={styles.text_box__typography}>
                  Наша команда разработает сайт или приложение для Ваших идей.
                </p>
                <p className={styles.text_box__typography}>
                  Мы поможем Вам разработь дизайн сайта или приложения под Ваши
                  потребности.
                </p>
                <p className={styles.text_box__typography}>
                  При создании сайтов и приложений мы используем современные
                  технологии и инструменты разработки.
                </p>
                <p className={styles.text_box__typography}>
                  Мы предлагаем SEO продвижение, постоянную поддержку сайта
                </p>
                <p className={styles.text_box__typography_strong}>
                  Мы оставляем за собой право отказать в разработке сайтов,
                  нарушающих законодательство Российской Федерации и
                  распространяющих моральное или этичное разложение общества.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <div className={styles.features}>
          <div className={styles.features__box_heading}>
            <h2 className={styles.features__heading}>
              Разрабатываем и внедряем любые решения
            </h2>
          </div>
          <div className={styles.features__content}>
            <div className={styles.features__box}>
              {cards.map((c) => {
                return (
                  <Card
                    key={c.id}
                    variant={c.variant}
                    heading={c.heading}
                    textP={c.textP}
                    price={c.price}
                    textBtn={c.textBtn}
                  />
                )
              })}
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.info__seo}>
            <div className={styles.info__seo_card}>
              <h2 className={styles.info__card__heading}>
                SEO продвижение сайта
              </h2>
              <p className={styles.info__card__text}>
                Стратегия раскрутки зависит от множества факторов:
              </p>
              <ul className={styles.info__card__list}>
                <li className={styles.info__card__item}>‌- Тематика сайта</li>
                <li className={styles.info__card__item}>
                  ‌- Активность конкурентов
                </li>
                <li className={styles.info__card__item}>
                  ‌- Бюджет продвижения
                </li>
                <li className={styles.info__card__item}>- ‌Контент</li>
                <li className={styles.info__card__item}>‌- Сроки</li>
                <li className={styles.info__card__item}>
                  ‌- Продвигаемые запросы
                </li>
                <li className={styles.info__card__item}>
                  ‌- Структура сайта и др.
                </li>
              </ul>
              <p className={styles.info__card__text}>
                Бюджет на SEO продвижение сайта всегда рассчитывается
                индивидуально.
              </p>
            </div>
          </div>

          <div className={styles.info__support}>
            <div className={styles.info__support_card}>
              <h2 className={styles.info__card__heading}>
                Техническая поддержка
              </h2>
              <p className={styles.info__card__text}>
                Успешный проект — постоянно обновляемый проект, быстро
                реагирующий на меняющийся рынок.
              </p>
              <p className={styles.info__card__text}>
                Поддержка только нами выполненных проектов
              </p>
              <p className={styles.info__card__text}>
                Мы оказываем комплексное сопровождение сайтов, а также выполняем
                разовые задачи
              </p>
              <p className={styles.info__card__text}>Цена от 5000₽</p>
              <Button>Заказать</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ‌- Тематика сайта;
// ‌- Активность конкурентов;
// ‌- Бюджет продвижения;
// - ‌Контент;
// ‌- Сроки;
// ‌- Продвигаемые запросы;
// ‌- Структура сайта и др.
