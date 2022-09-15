import React from 'react';

const ProductItem = ({ title, description, image }) => {
    return (
        <div className="text-center">
            <img
                src={image}
                alt={title}
                width={126}
                height={126}
                className="ml-auto mr-auto mb-[36px]"
            />
            <div className="text-[36px] leading-[54px] font-[500] mb-[11px] sm:text-[24px] sm:leading-[36px]">
                {title}
            </div>
            <div className="text-[24px] leading-[36px] font-[400] opacity-80 sm:text-[16px] sm:leading-[24px]">
                {description}
            </div>
        </div>
    );
};

export default ProductItem;
