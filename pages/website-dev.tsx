import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/ui/card/Card'
import { cards } from '../utils/cards'
import { Button } from '../components/ui/button/Button'
import { Header } from '../components/modules/header/Header'
import { Footer } from '../components/modules/footer/Footer'
import devImage from '../assets/images/png/dev-image.png'
import styles from '../styles/Dev.module.scss'

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
      <main className={styles.dev}>
        <Header />
        <section className={styles.dev__section}>
          <div className={styles.dev__info}>
            <div className={styles.dev__info_image__box}>
              <Image
                className={styles.dev__info_image__box_image}
                src={devImage}
                alt="Разработка сайтов, продвижение сайтов, сопровождение сайтов, разработка приложений, продвижение приложений, сопровождение приложений"
              />
            </div>
            <div className={styles.dev__info_text__box}>
              <h1 className={styles.dev__info_text__box_heading}>
                Разработка сайтов и приложений
              </h1>
              <p className={styles.dev__info_text__box_typography}>
                Наша команда разработает сайт или приложение для Ваших идей.
              </p>
              <p className={styles.dev__info_text__box_typography}>
                Мы поможем Вам разработь дизайн сайта или приложения под Ваши
                потребности.
              </p>
              <p className={styles.dev__info_text__box_typography}>
                При создании сайтов и приложений мы используем современные
                технологии и инструменты разработки.
              </p>
              <p className={styles.dev__info_text__box_typography}>
                Мы предлагаем SEO продвижение, постоянную поддержку сайта
              </p>
              <p className={styles.dev__info_text__box_typography_strong}>
                Мы оставляем за собой право отказать в разработке сайтов,
                нарушающих законодательство Российской Федерации и
                распространяющих моральное или этичное разложение общества.
              </p>
            </div>
          </div>
          <div className={styles.dev__features}>
            <div className={styles.dev__features_box__heading}>
              <h2 className={styles.dev__features_box__heading_header}>
                Разрабатываем и внедряем любые решения
              </h2>
            </div>
            <div className={styles.dev__features_content}>
              <div className={styles.dev__features_content__feature}>
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
            <div className={styles.seo_support}>
              <div className={styles.seo_card}>
                <h2 className={styles.seo_card__heading}>
                  SEO продвижение сайта
                </h2>
                <p className={styles.seo_card__text}>
                  Стратегия раскрутки зависит от множества факторов:
                </p>
                <ul className={styles.seo_card__list}>
                  <li className={styles.seo_card__list_item}>
                    ‌- Тематика сайта
                  </li>
                  <li className={styles.seo_card__list_item}>
                    ‌- Активность конкурентов
                  </li>
                  <li className={styles.seo_card__list_item}>
                    ‌- Бюджет продвижения
                  </li>
                  <li className={styles.seo_card__list_item}>- ‌Контент</li>
                  <li className={styles.seo_card__list_item}>‌- Сроки</li>
                  <li className={styles.seo_card__list_item}>
                    ‌- Продвигаемые запросы
                  </li>
                  <li className={styles.seo_card__list_item}>
                    ‌- Структура сайта и др.
                  </li>
                </ul>
                <p className={styles.seo_card__list_item}>
                  Бюджет на SEO продвижение сайта всегда рассчитывается
                  индивидуально.
                </p>
              </div>

              <div className={styles.support_card}>
                <h2 className={styles.support_card__heading}>
                  Техническая поддержка
                </h2>
                <p className={styles.support_card__text}>
                  Успешный проект — постоянно обновляемый проект, быстро
                  реагирующий на меняющийся рынок.
                </p>
                <p className={styles.support_card__text}>
                  Поддержка только нами выполненных проектов
                </p>
                <p className={styles.support_card__text}>
                  Мы оказываем комплексное сопровождение сайтов, а также
                  выполняем разовые задачи
                </p>
                <p className={styles.support_card__text}>Цена от 5000₽</p>
                <Button>Заказать</Button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
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
