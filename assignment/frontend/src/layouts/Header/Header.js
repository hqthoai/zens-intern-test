import headerLogo from '../../assets/images/headerLogo.png';
import avatar from '../../assets/images/sunflower.jpg';
const HeaderUser = () => {
    return (
        <div className='flex items-center justify-end h- md:text-base text-xs'>
            <div className='text-end mr-4'>
                <p className='text-gray-500 leading-tight md:italic'>Handicrafted by</p>
                <p className='text-gray-600 font-medium leading-tight'>Jim HLS</p>
            </div>
            <div className='md:h-[68px] md:w-[68px] h-[38px] w-[38px]'>
                <img className='h-full w-full rounded-full' src={avatar} alt="avatar" />
            </div>
        </div>
    )
}

function Header() {
    return (
        <div className="flex lg:pl-[190px] lg:pr-[116px] md:px-[80px] pl-[19px] pr-4 items-center justify-between md:py-4 py-2">
            <div className='md:h-[70px] md:w-[70px] h-[44px] w-[44px]'>
                <img className='h-full w-full' src={headerLogo} alt="headerLogo" />
            </div>
            <HeaderUser />
        </div>
    );
}

export default Header;