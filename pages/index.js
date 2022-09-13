/* eslint-disable react/function-component-definition */
import Button from '@mui/material/Button';
import { Advertising, Brand1, Car1 } from 'assets/images';
import MainHeader from 'components/landing/MainHeader';
import Head from 'next/head';
import CardItem from '../components/landing/CardItem';
import HeroBanner from '../components/landing/HeroBanner';
import SearchSection from '../components/landing/SearchSection';
import TopHeader from '../components/landing/TopHeader';

const dummyDataCar = [
    {
        id: 1,
        name: 'BMW X3',
        price: '$248,000',
        priceOfMonth: '$2,302',
        variants: 4,
        withCOE: true,
        brand: 'Performance Motors',
        image: Car1.src,
        imgBrand: Brand1.src
    },
    {
        id: 2,
        name: 'BMW X3',
        price: '$248,000',
        priceOfMonth: '$2,302',
        variants: 4,
        withCOE: true,
        brand: 'Performance Motors',
        image: Car1.src,
        imgBrand: Brand1.src
    },
    {
        id: 3,
        name: 'BMW X3',
        price: '$248,000',
        priceOfMonth: '$2,302',
        variants: 4,
        withCOE: true,
        brand: 'Performance Motors',
        image: Car1.src,
        imgBrand: Brand1.src
    },
    {
        id: 4,
        name: 'BMW X3',
        price: '$248,000',
        priceOfMonth: '$2,302',
        variants: 4,
        withCOE: true,
        brand: 'Performance Motors',
        image: Car1.src,
        imgBrand: Brand1.src
    },
    {
        id: 5,
        name: 'BMW X3',
        price: '$248,000',
        priceOfMonth: '$2,302',
        variants: 4,
        withCOE: true,
        brand: 'Performance Motors',
        image: Car1.src,
        imgBrand: Brand1.src
    },
    {
        id: 6,
        name: 'BMW X3',
        price: '$248,000',
        priceOfMonth: '$2,302',
        variants: 4,
        withCOE: true,
        brand: 'Performance Motors',
        image: Car1.src,
        imgBrand: Brand1.src
    }
];

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
                <div className="py-[160px] px-[60px] bg-[#fff]">
                    <div className="content-card">
                        <div className="card-item">
                            <div className="w-full h-full overflow-hidden">
                                <img
                                    src={Advertising.src}
                                    alt="Advertising"
                                    className=" object-cover absolute w-full h-full"
                                />
                            </div>
                        </div>
                        {dummyDataCar.map(item => (
                            <CardItem key={item.id} {...item} />
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Button
                            variant="outlined"
                            className="text-[#EE1B24] text-[16px] leading-[24px] px-[16px] py-[8px] !border-[#EE1B24] normal-case"
                        >
                            View more new cars
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
