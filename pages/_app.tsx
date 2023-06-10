import "@/styles/globals.scss";
// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// // import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// // import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
// // import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'
// // import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'

// library.add(fas)

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
