import { EmailIcon, LocationIcon, PhoneIcon } from 'assets/icons';
const TopHeader = () => {
    return (
        <div className="bg-[#fff] px-[60px] py-[11px] flex justify-between font-[12px] items-center">
            <div className="flex text-[12px] leading-[20px]">
                <div className="flex py-[5px]">
                    <LocationIcon />
                    <div className="ml-[12px]">
                        71 Ayer Rajah Crescent, #06-14,
                        <br /> Singapore 139951
                    </div>
                </div>
                <div className="border-[1px] border-[#E3E3E3] border-solid mx-[23px]"></div>
                <div className="flex py-[5px]">
                    <EmailIcon />
                    <div className="ml-[12px]">
                        Email us at:
                        <br /> hello@carbuyer.com.sg
                    </div>
                </div>
            </div>
            <div className="flex text-[14px] leading-[17px]">
                <div className="flex py-[5px]">
                    <PhoneIcon />
                    <div className="ml-[12px]">
                        +65 8808 7905 <br />
                        +7 (700) 51 51 518
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
