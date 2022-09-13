import { Banner } from 'assets/images';
const index = () => {
    return (
        <div className="relative">
            <div className="absolute w-[100%] h-[100%] py-[97px] px-[108px] font-[700] text-[60px] text-white">
                Car Marketplace <br />
                <div className="font-[400] text-lg text-[#E3E3E3] leading-[22px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Nunc odio in et, lectus sit lorem id integer.
                </div>
            </div>
            <img src={Banner.src} alt="" className="w-full" />
        </div>
    );
};

export default index;
