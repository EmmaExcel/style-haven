import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HomeComponents/HeroSection'
import NewCollection from '@/components/HomeComponents/NewCollection'
import Unleash from '@/components/HomeComponents/Unleash'
import DiroHero from '@/components/HomeComponents/DiorHero'
import Featured from '@/components/HomeComponents/Featured'


export default function Home() {
    return (<>
    < Navbar />
        <section className={styles.HomeSection}>
            <div className={styles.HomeContainer}>
                <HeroSection/>
                <NewCollection/>
                <Unleash/>
                <DiroHero/>
                <Featured/>
            </div>
        </section>
    </> 
    )
}