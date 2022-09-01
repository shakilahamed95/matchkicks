import Image from 'next/image';
const Menu = () => {
    return (
        <div className='absolute w-[1920] h-[56px] ml-[0] mt-[124px]'>
            <div className='ml-[285px] w-[413.4px] mt-[32px] flex items-center justify-between'>
                <p>Home</p>
                <p>Products</p>
                <p>Design Lab</p>
                <p>Blog</p>
                <p>Others</p>
            </div>
            <div className='flex items-center justify-center relative mt-[-58px] w-[178px] h-[56px] ml-[1455px] bg-primary text-white'>
                <div className='w-[32.4px] h-[28.8px] mt-[3.6px]'>
                    <Image src='/menu.png' alt='' width="25.2pxpx" height="24.27px"></Image>
                </div>
                <div>
                    <p>Help-line</p>
                    <p>+1234567890</p>
                </div>
            </div>


        </div>
    );
};

export default Menu;