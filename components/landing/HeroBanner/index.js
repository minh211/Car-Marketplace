import { Banner } from 'assets/images';
const index = () => {
    return (
        <div className="relative">
            <img src={Banner.src} alt="" className="w-full" />
            <div className="absolute w-[100%] h-[100%] text-white"></div>
        </div>
    );
};

export default index;
