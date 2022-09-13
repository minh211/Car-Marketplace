import Button from '@mui/material/Button';
import { Logo } from 'assets/images';
import Link from 'next/link';
const MainHeader = () => {
    return (
        <div className="flex px-[60px] py-[18px] bg-[#232323] justify-between items-center text-[16px]  leading-[19px]  text-white ">
            <img src={Logo.src} alt="logo" />
            <div className="navbar">
                <Link href="/new-cars">
                    <a className="mx-[23px] hover:text-[#999999]">New Cars</a>
                </Link>
                <Link href="/used-cars">
                    <a className="mx-[23px] hover:text-[#999999]">Used Cars</a>
                </Link>
                <Link href="/reviews">
                    <a className="mx-[23px] hover:text-[#999999]">Reviews</a>
                </Link>
                <Link href="/news">
                    <a className="mx-[23px] hover:text-[#999999]">News</a>
                </Link>
            </div>
            <Button className="bg-[red] hover:bg-[#8c0000] text-white min-w-[180px] min-h-[40px] rounded-[5px] normal-case">
                Login
            </Button>
        </div>
    );
};

export default MainHeader;
