import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
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
import { useState } from 'react';

const MainFooter = () => {
    const [open, setOpen] = useState();

    return (
        <>
            <footer class="bg-white text-[#232323] text-[14px] leading-[22px] px-[113px] pt-[52px] sm:pt-[24px] sm:px-[16px]">
                <div className="flex gap-[30px] justify-between sm:flex-col sm:gap-[0px]">
                    <div className="w-[350px] sm:items-center">
                        <img
                            src={LogoCarBuyer.src}
                            alt="logo"
                            height="62px"
                            className="mb-[16px]"
                        />
                        <p className="mb-[8px] flex items-center sm:justify-center">
                            <LocationIcon />
                            <span className="ml-[8px] text-[12px] leading-[20px] sm:flex-start">
                                71 Ayer Rajah Crescent, #06-14, Singapore 139951
                            </span>
                        </p>
                        <p className="mb-[8px] flex items-center sm:justify-center">
                            <PhoneIcon />
                            <span className="ml-[8px] text-[12px] leading-[20px] sm:flex-start">
                                +65 8808 7905
                            </span>
                        </p>
                        <p className="mb-[8px] flex items-center sm:justify-center">
                            <EmailIcon />
                            <span className="ml-[8px] text-[12px] leading-[20px]">
                                hello@carbuyer.com.sg
                            </span>
                        </p>
                    </div>
                    <div className="lg:hidden border-dash bg-[#F1F2F5] border-[#F1F2F5] rounded-[20px] border-[1px] w-[100%] "></div>
                    <div className="flex gap-[30px]">
                        <div className="text-[#5F5F5F] flex flex-col sm:w-[343px]">
                            <div className="text-[#232323] text-[16px] leading-[24px] font-[600] mb-[8px] sm:mb-[0px] sm:hidden">
                                About
                            </div>
                            <div className="lg:hidden">
                                <div className="">
                                    <ListItemButton
                                        onClick={() => setOpen('About')}
                                    >
                                        <ListItemText
                                            primary="About"
                                            sx={{
                                                '& .MuiTypography-body1': {
                                                    fontWeight: '600'
                                                }
                                            }}
                                        />
                                        {open === 'About' ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )}
                                    </ListItemButton>
                                    <Collapse
                                        in={open === 'About'}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <List component="div" disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary="About Us" />
                                            </ListItemButton>
                                            <ListItemButton>
                                                <ListItemText primary="Contact Us" />
                                            </ListItemButton>
                                            <ListItemButton>
                                                <ListItemText primary="Careers" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </div>
                                <div className="lg:hidden border-dash bg-[#F1F2F5] border-[#F1F2F5] rounded-[20px] border-[1px] w-[100%] "></div>
                                <div>
                                    <ListItemButton
                                        onClick={() => setOpen('Services')}
                                    >
                                        <ListItemText
                                            primary="Services"
                                            sx={{
                                                '& .MuiTypography-body1': {
                                                    fontWeight: '600'
                                                }
                                            }}
                                        />
                                        {open === 'Services' ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )}
                                    </ListItemButton>
                                    <Collapse
                                        in={open === 'Services'}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <List component="div" disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary="Buy Used Cars" />
                                            </ListItemButton>
                                            <ListItemButton>
                                                <ListItemText primary="Buy New Cars" />
                                            </ListItemButton>
                                            <ListItemButton>
                                                <ListItemText primary="Be a Dealer with UCARS" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </div>
                                <div className="lg:hidden border-dash bg-[#F1F2F5] border-[#F1F2F5] rounded-[20px] border-[1px] w-[100%] "></div>
                                <div>
                                    <ListItemButton
                                        onClick={() => setOpen('Resources')}
                                    >
                                        <ListItemText
                                            primary="Resources"
                                            sx={{
                                                '& .MuiTypography-body1': {
                                                    fontWeight: '600'
                                                }
                                            }}
                                        />
                                        {open === 'Resources' ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )}
                                    </ListItemButton>
                                    <Collapse
                                        in={open === 'Resources'}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <List component="div" disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary="News" />
                                            </ListItemButton>
                                            <ListItemButton>
                                                <ListItemText primary="Sell My Car" />
                                            </ListItemButton>
                                            <ListItemButton>
                                                <ListItemText primary="COE Prices" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </div>
                                <div className="lg:hidden border-dash bg-[#F1F2F5] border-[#F1F2F5] rounded-[20px] border-[1px] w-[100%] "></div>
                                <div>
                                    <ListItemButton
                                        onClick={() => setOpen('Legal')}
                                    >
                                        <ListItemText
                                            primary="Legal"
                                            sx={{
                                                '& .MuiTypography-body1': {
                                                    fontWeight: '600'
                                                }
                                            }}
                                        />
                                        {open === 'Legal' ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )}
                                    </ListItemButton>
                                    <Collapse
                                        in={open === 'Legal'}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <List component="div" disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary="Legal Hihi" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </div>
                            </div>
                            <Link href="#">
                                <a className="mb-[12px] sm:hidden">About Us</a>
                            </Link>
                            <Link href="#">
                                <a className="mb-[12px] sm:hidden">
                                    Contact Us
                                </a>
                            </Link>
                            <Link href="#">
                                <a className="mb-[12px] sm:hidden">Careers</a>
                            </Link>
                        </div>
                        <div className="text-[#5F5F5F] flex flex-col sm:hidden">
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
                                <a className="mb-[12px]">
                                    Be a Dealer with UCARS
                                </a>
                            </Link>
                        </div>
                        <div className="text-[#5F5F5F] flex flex-col sm:hidden">
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
                    <div className="lg:hidden border-dash bg-[#F1F2F5] border-[#F1F2F5] rounded-[20px] border-[1px] sm:w-[100%] "></div>
                    <div className="w-[350px]">
                        <div className="mb-[12px] sm:mt-[24px] sm:text-[12px]">
                            Get the{' '}
                            <span className="text-[#EE1B24]">latest</span>{' '}
                            automotive news sent to your inbox!
                        </div>
                        <div className="flex items-center mb-[17px] sm:mr-[10px]">
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
                        <div className="flex items-center sm:mt-[24px]">
                            <span>Follow us</span>
                            <div className="ml-[7px] flex gap-[16px] items-center sm:ml-[36px] ">
                                <InstaIcon />
                                <FbIcon />
                                <TeleIcon />
                                <LinkedIcon />
                                <YoutubeIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-solid border-[#FAFAFA] border-[1px] sm:hidden"></div>
                <div className="flex justify-between mt-[20px] font-[400] font-[14px]">
                    <div className="flex gap-[3px] sm:hidden">
                        <Link href="#">Advertising Terms and Conditions</Link>
                        <Link href="#">Platform Terms and Conditions</Link>
                        <Link href="#">Privacy Policy</Link>
                    </div>
                    <div className="text-[#8C8C8C] sm:hidden">
                        © 2022. All rights reserved.
                    </div>
                </div>
                <div className="flex mt-[18px]">
                    <img
                        src={Logo.src}
                        alt=""
                        className="h-[16px] sm:mt-[10px]"
                    />
                    <span className="ml-[8px] text-[#5F5F5F] sm:text-center sm:text-[10px] sm:mb-[24px]">
                        CarBuyer Pte Ltd and the CarBuyer Singapore brand are
                        wholly owned by UCARS Pte Ltd
                    </span>
                </div>
            </footer>
            <div className="lg:hidden text-[#FFFFFF] text-[12px] bg-black w-[375px] items-center justify-center flex h-[48px]">
                <span className="">© 2022. All rights reserved.</span>
            </div>
        </>
    );
};

export default MainFooter;
