import Button from '@mui/material/Button';
import {
    Advertising,
    Brand1,
    Brand2,
    Brand3,
    Car1,
    Car2,
    Car3,
    Car4,
    Car5,
    Car6,
    Car7
} from 'assets/images';
import React from 'react';
import CardItem from '../CardItem';

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
        name: 'Alpine A110',
        price: '$248,000',
        priceOfMonth: '$2,302',
        variants: 3,
        withCOE: true,
        brand: 'Wearnes Automotive',
        image: Car2.src,
        imgBrand: Brand2.src
    },
    {
        id: 3,
        name: 'Aston Martin DBS Superlegge...',
        priceOfMonth: '$2,302',
        variants: 1,
        withCOE: false,
        POA: true,
        brand: 'EuroAutomobile',
        image: Car3.src,
        imgBrand: Brand1.src
    },
    {
        id: 4,
        name: 'Alfa Romeo Stelvio',
        price: '$278,000',
        priceOfMonth: '$2,302',
        variants: 3,
        withCOE: true,
        brand: 'Wearnes Automotive',
        image: Car4.src,
        imgBrand: Brand3.src
    },
    {
        id: 5,
        name: 'Aston Martin DB11 Volante',
        priceOfMonth: '$2,302',
        variants: 1,
        withCOE: false,
        POA: true,
        brand: 'Wearnes Automotive',
        image: Car5.src,
        imgBrand: Brand3.src
    },
    {
        id: 6,
        name: 'Aston Martin DB11',
        price: '$799,000',
        priceOfMonth: '$2,302',
        variants: 1,
        withCOE: false,
        brand: 'Wearnes Automotive',
        image: Car6.src,
        imgBrand: Brand3.src
    },
    {
        id: 7,
        name: 'Aston Martin DB11 Volante',
        priceOfMonth: '$2,302',
        variants: 1,
        withCOE: false,
        POA: true,
        brand: 'Wearnes Automotive',
        image: Car7.src,
        imgBrand: Brand3.src
    }
];

const ProductSection = () => {
    return (
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
    );
};

export default ProductSection;
