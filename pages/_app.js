import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { RecoilRoot } from "recoil"
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
    return ( <
        RecoilRoot >
        <
        Layout >
        <
        Component {...pageProps }
        /> < /
        Layout > <
        /RecoilRoot>
    )
}