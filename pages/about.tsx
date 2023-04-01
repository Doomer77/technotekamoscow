import Head from 'next/head'
import React from 'react'
import { withLayout } from '../components/modules/layout/Layout'

function About() {
  return (
    <>
      <Head>
        <title>TTM - О Нас</title>
        <meta
          name="description"
          content="TechnotekaMoscow - выездной сервис по ремонту и продаже техники брендов: Apple, Sumsung, Xiaomi, Huawei, Vivo, Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony"
        />
        <meta
          name="keywords"
          content="TechnotekaMoscow - выездной сервис, ремонт, продажа техники брендов: Apple, Sumsung, Xiaomi, Huawei, Vivo, Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>About</div>
    </>
  )
}

export default withLayout(About)
