import { AppProps } from "next/app"
import { storeWrapper } from '../store'

import '../styles/global.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default storeWrapper.withRedux(MyApp)
