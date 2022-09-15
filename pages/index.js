/* eslint-disable react/function-component-definition */
import Button from '@mui/material/Button';
import { QBanner } from 'assets/images';
import MainHeader from 'components/landing/MainHeader';
import Head from 'next/head';
import FeaturedSection from '../components/landing/FeaturedSection';
import HeroBanner from '../components/landing/HeroBanner';
import MainFooter from '../components/landing/MainFooter';
import ProductIntro from '../components/landing/ProductIntro';
import ProductSection from '../components/landing/ProductSection';
import SearchSection from '../components/landing/SearchSection';
import TopHeader from '../components/landing/TopHeader';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-[white] min-h-[100vh]">
                <TopHeader />
                <MainHeader />
                <HeroBanner />
                <SearchSection />
                <ProductSection />
                <ProductIntro />
                <FeaturedSection />
                <div className="relative">
                    <div className="absolute p-[80px]">
                        <div className="font-[600] text-[76px] text-white w-[390px] mb-[18px]">
                            Questions about buying or renting?
                        </div>
                        <Button className="w-[410px] h-[60px] bg-[#EE1B24] text-white rounded-[5px] normal-case">
                            Ask Us
                        </Button>
                    </div>
                    <img
                        src={QBanner.src}
                        alt=""
                        className="w-full max-h-[700px] object-cover"
                    />
                </div>
                <div className="bg-white pt-[80px]">
                    <div className="bg-[#F1F1F1] py-[40px] px-[90px] text-[12px] leading-[20px] text-[#5F5F5F] font-[400]">
                        <div className="text-[16px] mb-[16px]">
                            UCARS - Revolutionizing The Online Car Marketplace
                            In Singapore
                        </div>
                        <div className="content">
                            <h4 className="font-[600] leading-[24px]">
                                Buy Used And New Cars Online
                            </h4>
                            Start your car buying journey with UCARS as we
                            connect you seamlessly to the industry&#39;s best
                            CaseTrust-SVTA accredited car dealerships. As a one
                            stop car online portal you can now buy your new
                            ride, be it a pre-owned car or a brand new car from
                            trusted dealers all over Singapore, all in one
                            place. Our ever expanding listing of quality and
                            covet-worthy cars, new and second hand, from both
                            owners and trusted car dealers, will leave you
                            spoilt for choice. Refine your search by vehicle
                            type, registration year, price, mileage, engine
                            type, transmission, annual depreciation value and
                            more to find the car that best suits your needs,
                            taste and lifestyle. You can even search for your
                            car by dealer or directly by owner.
                            <h4 className="font-[600] leading-[24px] mt-[15px]">
                                Sell Your Car In An Instant With Confidence
                            </h4>
                            We all know how selling a car in Singapore can be a
                            daunting task especially for a first time car
                            seller; from trying to get a valuation for your car,
                            finding a trusted dealer, to getting the best quote
                            on your vehicle. UCARS understands the hassle and
                            even the costs involved and have as such partnered
                            with Huawei to develop a FIRST in Southeast Asia AI
                            car valuation tool that is able to provide a car’s
                            resale value at the snap of a finger. Backed with a
                            consortium of trusted CaseTrust-SVTA accredited car
                            dealers you can be assured that you are getting the
                            best price for your vehicle and do not have to worry
                            about any hidden costs.
                            <h4 className="font-[600] leading-[24px] mt-[15px]">
                                The Ultimate Car Shopping Experience Online
                            </h4>
                            UCARS platform is the first of its kind to be backed
                            by Huawei’s Artificial Intelligence and cloud
                            computing, enabling it to be able to offer users
                            transparency and enhanced security, all with the one
                            aim of enhancing customer experience. So come on
                            over to buy and sell used cars online at the best
                            prices at UCARS Singapore. Connect easily with
                            dealers in real-time via our online video call
                            feature, or schedule a test drive when you&#39;re
                            ready. Have some questions? Get them answered
                            instantly with our chatbot moderated by our
                            responsive team. Stay in the loop with our
                            car-related tips, reviews and news. Learn the
                            ins-and-outs of your car, as well as global and
                            Singapore’s car updates at your own pace.
                        </div>
                    </div>
                </div>
                <MainFooter />
            </div>
        </>
    );
}
