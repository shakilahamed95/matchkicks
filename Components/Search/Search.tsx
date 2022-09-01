import Image from 'next/image';
const Search = () => {
    return (
        <div className='box-border absolute w-[1920px] h-[80px] ml-[0] mt-[44px] border-b-[1px] border-neutral'>
            <div>
                <div className='absolute ml-[285px] mt-[30.2px] w-[103.6px] h-[33.6px]'>
                    <Image src='/Logo1.png' alt='' layout='fill'></Image>
                </div>
                <div className='absolute ml-[324.2px] mt-[39.07px]'>
                    <Image src='/loader 1.png' alt='' width="25.2pxpx" height="24.27px"></Image>
                </div>
            </div>
            <div className='absolute w-[184.8px] h-[48px] ml-[391.8px] mt-[24.2px]'>
                <Image src='/logo.png' alt='' layout='fill'></Image>
            </div>
            <div className='absolute box-border w-[ 541px] h-[50px] ml-[630px] mt-[20px] border border-primary rounded'>
                <button className='absolute w-[121px] h-[48px] bg-primary rounded text-white'> All Items</button>
                <input type="text" placeholder="Search Sneaker Collections" className="mx-32 p-3" />
            </div>
            <div className='ml-[1454px] mt-[29px] w-[178px] flex items-center justify-between'>
                <div>
                    <Image src='/vector.png' alt='' width="20px" height="18.5px"></Image>
                </div>
                <div className='w-[1px] h-[24px] bg-neutral'></div>
                <div> <Image src='/man.png' alt='' width="20px" height="18.5px"></Image> </div>
                <div className='w-[1px] h-[24px] bg-neutral'></div>
                <div> <Image src='/cart.png' alt='' width="20px" height="18.5px"></Image> </div>
                <p>Cart(0)</p>
            </div>
        </div>
    );
};

export default Search;