import Image from 'next/image';
const Category = () => {
    return (
        <div className=" w-[1920px] h-[453px] mt-[1046px] absolute">
            <h1 className="font-bold not-italic text-4xl text-[#1B2631] content-center text-center  mt-[60px]">Browse By Category</h1>
            <div className="flex items-center justify-center mt-[8px]">
                <div className="border w-[70px] h-[2px] border-primary mt-[4px]"></div>
                <Image src='/shoe.png' alt='' width="50px" height="50px"></Image>
                <div className="border w-[70px] h-[2px] border-primary mt-[4px]"></div>
            </div>
            <div className='text-center flex items-center justify-center mt-[6px]'>
                <p className='not-italic font-normal text-base w-[430px] h-[48px] text-[#5D6D7E]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text</p>
            </div>
            <div className='ml-[562px] mt-[57px]'>
                <div className='absolute w-[140px] h-[130px] shadow-xl rounded-lg bg-primary mr-6'>
                    <div className='absolute ml-[49px] mr-[49px] mt-[24px] mb-[16px]'>
                        <Image src='/tshirt.png' alt='' width="41.97px" height="42px"></Image>
                    </div>
                    <p className='not-italic absolute ml-[45px] mt-[82px] font-medium text-base text-center text-white'>T-Shirt</p>
                </div>
                <div className='absolute w-[140px] h-[130px] ml-[164px] rounded-lg bg-[#F4F7FB] mr-6'>
                    <div className='absolute ml-[49px] mr-[49px] mt-[24px] mb-[16px]'>
                        <Image src='/hodi.png' alt='' width="41.97px" height="42px"></Image>
                    </div>
                    <p className='not-italic absolute ml-[45px] mt-[82px] font-medium text-base text-center text-[color-3/900]'>Hoodies</p>
                </div>
                <div className='absolute w-[140px] h-[130px] ml-[328px] rounded-lg bg-[#F4F7FB] mr-6'>
                    <div className='absolute ml-[49px] mr-[49px] mt-[24px] mb-[16px]'>
                        <Image src='/hodi.png' alt='' width="41.97px" height="42px"></Image>
                    </div>
                    <p className='not-italic absolute ml-[45px] mt-[82px] font-medium text-base text-center text-[color-3/900]'>Hoodies</p>
                </div>
                <div className='absolute w-[140px] h-[130px] ml-[492px] rounded-lg bg-[#F4F7FB] mr-6'>
                    <div className='absolute ml-[49px] mr-[49px] mt-[24px] mb-[16px]'>
                        <Image src='/bags.png' alt='' width="41.97px" height="42px"></Image>
                    </div>
                    <p className='not-italic absolute ml-[38px] mt-[82px] font-medium text-base  text-[color-3/900]'>Gym Bags</p>
                </div>
                <div className='absolute w-[140px] h-[130px] ml-[656px] rounded-lg bg-[#F4F7FB] mr-6'>
                    <div className='absolute ml-[49px] mr-[49px] mt-[24px] mb-[16px]'>
                        <Image src='/shocks.png' alt='' width="41.97px" height="42px"></Image>
                    </div>
                    <p className='not-italic absolute ml-[45px] mt-[82px] font-medium text-base text-center text-[color-3/900]'>Socks</p>
                </div>
            </div>

        </div>
    );
};

export default Category;