import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'
import { Fragment } from 'react'
import { nextSeoDefaultConfig } from '@/assets/nextSeoConfig'
import Header from '@/components/UI/header'
import Footer from '@/components/UI/footer'

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo {...nextSeoDefaultConfig}/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </Fragment>
  )
}
