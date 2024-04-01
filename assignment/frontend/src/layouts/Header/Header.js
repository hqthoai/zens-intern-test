import headerLogo from '../../assets/images/headerLogo.png';
import avatar from '../../assets/images/sunflower.jpg';
const HeaderUser = () => {
    return (
        <div className='flex items-center justify-end h-full'>
            <div className='text-end mr-4'>
                <p className='text-gray-500 leading-tight md:italic'>Handicrafted by</p>
                <p className='text-gray-600 font-medium leading-tight'>Jim HLS</p>
            </div>
            <div className='h-[68px] w-[68px]'>
                <img className='h-full w-full rounded-full' src={avatar} alt="avatar" />
            </div>
        </div>
    )
}

function Header() {
    return (
        <div className="flex lg:pl-[190px] lg:pr-[116px] md:px-[80px] pl-[19px] pr-4 items-center justify-between h-[103px]">
            <div className='h-[70px] w-[70px]'>
                <img className='h-full w-full' src={headerLogo} alt="headerLogo" />
            </div>
            <HeaderUser />
        </div>
    );
}

export default Header;