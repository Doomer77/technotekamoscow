import React, { FunctionComponent } from 'react'
import { LayoutProps } from './Layout.props'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'

import styles from './Layout.module.scss'

const Layout = ({ children, type }: LayoutProps): JSX.Element => {
  return (
    <div className={type === '100' ? styles.layout_100 : styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
  type: string,
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout type={type}>
        <Component {...props} />
      </Layout>
    )
  }
}
