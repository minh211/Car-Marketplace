import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import {
    EmailIcon,
    FbIcon,
    InstaIcon,
    LinkedIcon,
    LocationIcon,
    PhoneIcon,
    TeleIcon,
    YoutubeIcon
} from 'assets/icons';
import { Logo, LogoCarBuyer } from 'assets/images';
import Link from 'next/link';
const MainFooter = () => {
    return (
        <footer class="bg-white text-[#232323] text-[14px] leading-[22px] px-[113px] pt-[52px] pb-[40px]">
            <div className="flex gap-[30px] justify-between">
                <div className="w-[350px]">
                    <img
                        src={LogoCarBuyer.src}
                        alt="logo"
                        height="62px"
                        className="mb-[16px]"
                    />
                    <p className="mb-[8px] flex items-center">
                        <LocationIcon />
                        <span className="ml-[8px] text-[12px] leading-[20px]">
                            71 Ayer Rajah Crescent, #06-14, Singapore 139951
                        </span>
                    </p>
                    <p className="mb-[8px] flex items-center">
                        <PhoneIcon />
                        <span className="ml-[8px] text-[12px] leading-[20px]">
                            +65 8808 7905
                        </span>
                    </p>
                    <p className="mb-[8px] flex items-center">
                        <EmailIcon />
                        <span className="ml-[8px] text-[12px] leading-[20px]">
                            hello@carbuyer.com.sg
                        </span>
                    </p>
                </div>
                <div className="flex gap-[30px]">
                    <div className="text-[#5F5F5F] flex flex-col">
                        <div className="text-[#232323] text-[16px] leading-[24px] font-[600] mb-[8px]">
                            About
                        </div>
                        <Link href="#">
                            <a className="mb-[12px]">About Us</a>
                        </Link>
                        <Link href="#">
                            <a className="mb-[12px]">Contact Us</a>
                        </Link>
                        <Link href="#">
                            <a className="mb-[12px]">Careers</a>
                        </Link>
                    </div>
                    <div className="text-[#5F5F5F] flex flex-col">
                        <div className="text-[#232323] text-[16px] leading-[24px] font-[600] mb-[8px]">
                            Services
                        </div>
                        <Link href="#">
                            <a className="mb-[12px]">Buy Used Cars</a>
                        </Link>
                        <Link href="#">
                            <a className="mb-[12px]">Buy New Cars</a>
                        </Link>
                        <Link href="#">
                            <a className="mb-[12px]">Be a Dealer with UCARS</a>
                        </Link>
                    </div>
                    <div className="text-[#5F5F5F] flex flex-col">
                        <div className="text-[#232323] text-[16px] leading-[24px] font-[600] mb-[8px]">
                            Resources
                        </div>
                        <Link href="#">
                            <a className="mb-[12px]">News</a>
                        </Link>
                        <Link href="#">
                            <a className="mb-[12px]">Sell My Car</a>
                        </Link>
                        <Link href="#">
                            <a className="mb-[12px]">COE Prices</a>
                        </Link>
                    </div>
                </div>
                <div className="w-[350px]">
                    <div className="mb-[12px]">
                        Get the <span className="text-[#EE1B24]">latest</span>{' '}
                        automotive news sent to your inbox!
                    </div>
                    <div className="flex items-center mb-[17px]">
                        <OutlinedInput
                            className="h-[38px] w-[250px] px-[15px] py-[10px] placeholder:text-[#B4B4B4] text-[#232323] rounded-tl-[5px] rounded-bl-[5px] rounded-tr-[0px] rounded-br-[0px] outline-none"
                            placeholder="Enter your email"
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '0px',
                                    lineHeight: '18px',
                                    fontSize: '14px',
                                    height: 'unset'
                                }
                            }}
                        />
                        <Button className="bg-[#EE1B24] text-white rounded-tl-[0px] rounded-bl-[0px] rounded-tr-[5px] rounded-br-[5px] normal-case h-[38px] w-[100px]">
                            Subscribe
                        </Button>
                    </div>
                    <div className="flex items-center">
                        <span>Follow us</span>
                        <div className="ml-[7px] flex gap-[16px] items-center">
                            <InstaIcon />
                            <FbIcon />
                            <TeleIcon />
                            <LinkedIcon />
                            <YoutubeIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-solid border-[#FAFAFA] border-[1px]"></div>
            <div className="flex justify-between mt-[20px] font-[400] font-[14px]">
                <div className="flex gap-[3px]">
                    <Link href="#">Advertising Terms and Conditions</Link>
                    <Link href="#">Platform Terms and Conditions</Link>
                    <Link href="#">Privacy Policy</Link>
                </div>
                <div className="text-[#8C8C8C]">
                    © 2022. All rights reserved.
                </div>
            </div>
            <div className="flex mt-[18px]">
                <img src={Logo.src} alt="" className="h-[16px]" />
                <span className="ml-[8px] text-[#5F5F5F]">
                    CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly
                    owned by UCARS Pte Ltd
                </span>
            </div>
        </footer>
    );
};

export default MainFooter;
