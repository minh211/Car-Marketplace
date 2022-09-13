const CardItem = ({
    id,
    name,
    price,
    priceOfMonth,
    variants,
    withCOE,
    brand,
    image,
    imgBrand
}) => {
    return (
        <div className="card-item">
            <div className="box-image">
                <img src={image} alt={name} width="100%" height="187px" />
            </div>
            <div className="box-text p-[16px] bg-white text-[14px] leading-[22px] text-[#232323]">
                <div className="text-[16px] font-[600] leading-[24px] mb-[8px]">
                    {name}
                </div>
                <div className="text-[16px] font-[400] leading-[24px] mb-[8px] flex items-center">
                    From
                    <span className="text-[#0F5EDD] font-[600] ml-[6px]">
                        {price}
                    </span>
                    <span className="ml-[8px] text-[#0F5EDD] px-[4px] py-[2px] bg-[#E5EEFB] rounded-[2px] font-[400] text-[12px]">
                        {priceOfMonth}
                    </span>
                </div>
                <div className=" text-[#5F5F5F] mb-[16px]">
                    {variants} variants {withCOE ? '| with COE' : ''}
                </div>
                <div className="mb-[8px] flex items-center">
                    <img
                        src={imgBrand}
                        alt={brand}
                        width={32}
                        height={32}
                        className="rounded-[50%]"
                    />
                    <span className="ml-[8px]">{brand}</span>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
