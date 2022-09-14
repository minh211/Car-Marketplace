const FeaturedItem = ({ id, name, type, price, brand, image }) => {
    return (
        <div className="px-[20px] py-[10px]">
            <div className={`${name ? 'mb-[50px]' : ''}`}>
                <img
                    src={image}
                    alt={name}
                    width="100%"
                    className={`w-full ${name ? 'h-[200px]' : 'h-[360px]'}`}
                />
            </div>
            {name && (
                <div className="text-[19px] leading-[29px] text-[#232323]">
                    <div className="flex justify-between items-end">
                        <div className="">
                            <div className="text-[32px] font-[500] leading-[48px] mb-[2px]">
                                {name}
                            </div>
                            <div>{brand}</div>
                        </div>
                        <div className="">
                            <div className="mb-[6px]">{type}</div>
                            <div className="text-[#EE1B24] font-[700]">
                                {price}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeaturedItem;
