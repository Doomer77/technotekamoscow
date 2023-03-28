import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { navHome } from '../utils/nav-home'
import { withLayout } from '../components/modules/layout/Layout'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <>
      <Head>
        <title>TTM - ремонт и обслуживание техники</title>
        <meta
          name="description"
          content="TechnotekaMoscow - выездной сервис по ремонту и продаже техники брендов: Apple, Sumsung, Xiaomi, Huawei, Vivo,
                    Oppo, Realme, Vertu, Asus, Acer, HP, Lenovo, Dell, MSi, Gygabyte, Sony"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

