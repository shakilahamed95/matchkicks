const TopBnner = () => {
    return (
        <div className='absolute w-[1920px] h-[44px] font-sans font-normal text-sm flex items-center justify-between bg-secondary text-accent top-0 ml-0'>
            <div>
                <h5 className='ml-[285px] mt-[10px] mb-[12]'>Use Code BACK2SCHOOL at checkout for 10% off entire order.</h5>
            </div>

            <div className='flex items-center justify-center mr-[285px] mt-[20px] mb-[12px]'>
                <p className='mr-[20px]'>Faq’s</p>
                <p className='mr-[20px]'>Need Help?</p>
                <p ><span className='font-bold text-accent'>Login </span> or <span className='font-bold text-accent'>Registration</span></p>
            </div>
        </div >
    );
};

export default TopBnner;