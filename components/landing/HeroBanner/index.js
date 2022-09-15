import Button from '@mui/material/Button';
import { Banner, SmBanner } from 'assets/images';
const HeroBanner = () => {
    return (
        <div className="relative ">
            <div className="absolute w-[100%] max-h-[529px] py-[97px] px-[108px] font-[700] text-[60px] text-white sm:hidden ">
                Car Marketplace <br />
                <div className="font-[400] text-lg text-[#E3E3E3] leading-[22px] mb-[32px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Nunc odio in et, lectus sit lorem id integer.
                </div>
                <Button className="bg-[#EE1B24] hover:bg-[#640c11] w-[196px] h-[52px] text-white normal-case rounded-[8px]">
                    Get Started
                </Button>
            </div>
            <img
                src={Banner.src}
                alt=""
                className="w-full object-cover sm:hidden"
            />
            <img
                src={SmBanner.src}
                alt=""
                className="w-full object-cover lg:hidden"
            />
        </div>
    );
};

export default HeroBanner;
