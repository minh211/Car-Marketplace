import { Lock1, Payment1, Work1 } from 'assets/images';
import React from 'react';
import ProductItem from '../ProductItem';
const productWorks = [
    {
        id: 1,
        title: 'Find Car',
        description:
            'Our cars are located at prime areas where by there won’t be problem with transportation',
        image: Work1.src
    },
    {
        id: 2,
        title: 'Make payments',
        description:
            'Our estates comes with good network,portable water , 24hrs light and round the clock security.',
        image: Payment1.src
    },
    {
        id: 3,
        title: 'Make it Official',
        description:
            'We have been in business for over 32 years,for client outside the country you can trust  us to deliver well. ',
        image: Lock1.src
    }
];

const ProductIntro = () => {
    return (
        <div className="bg-[#232323] text-white text-center py-[22px] px-[90px] sm:px-[35px]">
            <div className="text-[#EE1B24] text-[48px] leading-[72px] sm:text-[32px] sm:leading-[48px] font-[700] mb-[7px]">
                How it works.
            </div>
            <div className="text-[32px] leading-[48px] sm:text-[20px] sm:leading-[30px] mb-[142px] sm:mb-[32px]">
                This is how our products works
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-1 gap-[80px] sm:gap-[40px] mb-[70px] sm:mb-[20px]">
                {productWorks.map(item => (
                    <ProductItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default ProductIntro;
