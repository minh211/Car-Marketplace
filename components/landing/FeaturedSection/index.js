import Button from '@mui/material/Button';
import { Advertising, Car10, Car8, Car9 } from 'assets/images';
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import FeaturedItem from '../FeaturedItem';
const featuredCar = [
    {
        id: 1,
        name: 'The Palace',
        type: 'Duplex',
        price: '$2,000',
        brand: 'Lekki,phase 2',
        image: Car8.src
    },
    {
        id: 2,
        name: 'IVY RORY',
        type: 'Duplex',
        price: '$2,000',
        brand: 'Lekki,phase 2',
        image: Car9.src
    },
    {
        id: 3,
        image: Advertising.src
    },
    {
        id: 4,
        name: 'REXONA',
        type: 'Duplex',
        price: '$2,000',
        brand: 'Lekki,phase 2',
        image: Car10.src
    },
    {
        id: 5,
        name: 'The Palace',
        type: 'Duplex',
        price: '$2,000',
        brand: 'Lekki,phase 2',
        image: Car8.src
    },
    {
        id: 6,
        name: 'IVY RORY',
        type: 'Duplex',
        price: '$2,000',
        brand: 'Lekki,phase 2',
        image: Car9.src
    },
    {
        id: 7,
        name: 'IVY RORY',
        type: 'Duplex',
        price: '$2,000',
        brand: 'Lekki,phase 2',
        image: Car9.src
    },
    {
        id: 8,
        name: 'IVY RORY',
        type: 'Duplex',
        price: '$2,000',
        brand: 'Lekki,phase 2',
        image: Car9.src
    },
    {
        id: 9,
        name: 'IVY RORY',
        type: 'Duplex',
        price: '$2,000',
        brand: 'Lekki,phase 2',
        image: Car9.src
    }
];

const FeaturedSection = () => {
    return (
        <div className="bg-[#fff] text-[#232323] py-[80px] px-[64px] sm:px-[5px] sm:py-[50px]">
            <div className="flex justify-between items-end mb-[60px] sm:w-[370px] sm:mx-[px] sm:mb-[10px]">
                <div className="">
                    <div className="text-[#EE1B24] text-[48px] leading-[72px] font-[700] mb-[7px] sm:text-[31px] sm:leading-[38px] sm:text-center">
                        Our Featured Vehicles.
                    </div>
                    <div className="text-[32px] leading-[48px] sm:text-[17px] sm:text-center sm:leading-[24px] ">
                        One of our biggest product to be featured <br />
                        and that has sold out the most.
                    </div>
                </div>
                <Button className="bg-[#EE1B24] text-white rounded-[5px] w-[180px] h-[40px] sm:hidden">
                    View More
                </Button>
            </div>
            <ScrollContainer className="scroll-container">
                <div className="flex flex-nowrap w-[max-content] sm:mt-[10px] ">
                    {featuredCar.map(item => (
                        <FeaturedItem key={item.id} {...item} />
                    ))}
                </div>
            </ScrollContainer>
            <div className="sm:text-right lg:hidden">
                <Button className="bg-[#EE1B24] text-white rounded-[5px] w-[180px] h-[40px] sm:mr-[10px] lg:hidden">
                    View More
                </Button>
            </div>
        </div>
    );
};

export default FeaturedSection;
