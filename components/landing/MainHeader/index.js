import Button from '@mui/material/Button';
import { SearchIcon } from 'assets/icons';
import { Logo, LogoCarBuyer1 } from 'assets/images';
import Link from 'next/link';
const MainHeader = () => {
    return (
        <>
            <div className="flex px-[60px] py-[18px] bg-[#232323] justify-between items-center text-[16px]  leading-[19px] text-white sm:hidden">
                <img src={Logo.src} alt="logo" />
                <div className="navbar">
                    <Link href="/new-cars">
                        <a className="mx-[23px] hover:text-[#999999]">
                            New Cars
                        </a>
                    </Link>
                    <Link href="/used-cars">
                        <a className="mx-[23px] hover:text-[#999999]">
                            Used Cars
                        </a>
                    </Link>
                    <Link href="/reviews">
                        <a className="mx-[23px] hover:text-[#999999]">
                            Reviews
                        </a>
                    </Link>
                    <Link href="/news">
                        <a className="mx-[23px] hover:text-[#999999]">News</a>
                    </Link>
                </div>
                <Button className="bg-[red] hover:bg-[#8c0000] text-white min-w-[180px] min-h-[40px] rounded-[5px] normal-case">
                    Login
                </Button>
            </div>
            <div className="flex sm:h-[64px] px-[16px] py-[12px] bg-[#fff] justify-between text-[16px] text-white lg:hidden">
                <img
                    src={LogoCarBuyer1.src}
                    alt="logo"
                    width="120px"
                    height="40px"
                    className=""
                />
                <div className="pt-[10px]">
                    <SearchIcon />
                </div>
            </div>
        </>
    );
};

export default MainHeader;
