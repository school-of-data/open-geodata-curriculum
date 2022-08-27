import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import "@styles/globals.css";

const MyApp = ({ Component, pageProps }) => <><Head><title>School of Data | Open Geodata Curriculum</title></Head><Component {...pageProps} /></>

const WrappedApp = appWithTranslation(MyApp)

export default function RouterEmulatedApp({ ...props }) {
  props.router.locale = props.router.query.locale
  return <WrappedApp {...props} />
}