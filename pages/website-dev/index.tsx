import Head from 'next/head'
import React from 'react'
import { withLayout } from '../../components/modules/layout/Layout'

function WebSiteDev() {
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
      <div>WebSiteDev</div>
    </>
  )
}

export default withLayout(WebSiteDev)
