import React, { FunctionComponent } from 'react'
import { LayoutProps } from './Layout.props'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'

import styles from './Layout.module.css'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
