/* eslint-disable react/function-component-definition */
import MainHeader from 'components/landing/MainHeader';
import Head from 'next/head';
import HeroBanner from '../components/landing/HeroBanner';
import SearchSection from '../components/landing/SearchSection';
import TopHeader from '../components/landing/TopHeader';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-[black] min-h-[100vh]">
                <TopHeader />
                <MainHeader />
                <HeroBanner />
                <SearchSection />
            </div>
        </>
    );
}
