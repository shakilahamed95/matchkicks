import Image from 'next/image';
const Products = () => {
    return (
        <div className='ml-[285px] mr-[285px]'>
            <div className="w-[1350px] h-[521px] mt-[1559px] absolute mr-[285px] grid grid-cols-4 gap-[30px]">
                {/* product1 */}
                <div className=" w-[315px] h-[420px] bg-[#FFFFFF] shadow-[0_3px_8px_rgba(11,50,93,0.08)] rounded-xl p-4 ">
                    <div className="absolute w-[283px] h-[240px] bg-[#F3F6F8] rounded-md ">
                        <div className='ml-14 mt-[25px] mb-[25px]'>
                            <Image src='/shirt1.png' alt='' width="171.34px" height="190px"></Image>
                        </div>
                        <div className='absolute flex items-center justify-center mt-[-70px] w-[178px] h-12 ml-[46px]'>
                            <div className=' bg-primary p-3 mr-2 rounded'>
                                <Image src='/love.png' alt='' width="19.8px" height="14px"></Image>
                            </div>
                            <div className=' bg-white p-3 mr-2 rounded'>
                                <Image src='/eye.png' alt='' width="19.8px" height="14px"></Image>
                            </div>
                            <div className='bg-white p-3 rounded'>
                                <Image src='/pencil.png' alt='' width="19.8px" height="14px"></Image>
                            </div>
                        </div>
                    </div>
                    <p className='absolute w-[213px] h-6 not-italic font-semibold text-lg text-[#1B2631] mt-[260px]'>Simple Product Title Here</p>
                    <div className='mt-[284px] w-[275px] h-10 flex items-center justify-start'>
                        <p className='text-primary text-lg font-medium mr-2'>$20.59</p>
                        <p className='line-through text-sm mt-1'>$30.00</p>
                    </div>
                    <button className='absolute w-[275px] h-12 mt-2 btn btn-primary text-white font-semibold text-base'> ADD TO CART</button>
                </div>
                {/* product 2 */}
                <div className=" w-[315px] h-[420px] bg-[#FFFFFF] shadow-[0_3px_8px_rgba(11,50,93,0.08)] rounded-xl p-4">
                    <div className="absolute w-[283px] h-[240px] bg-[#F3F6F8] rounded-md">
                        <div className='ml-14 mt-[25px] mb-[25px]'>
                            <Image src='/shirt2.png' alt='' width="171.34px" height="190px"></Image>
                        </div>
                    </div>
                    <p className='absolute w-[213px] h-6 not-italic font-semibold text-lg text-[#1B2631] mt-[260px]'>Simple Product Title Here</p>
                    <div className='mt-[284px] w-[275px] h-10 flex items-center justify-start'>
                        <p className='text-primary text-lg font-medium mr-2'>$20.59</p>
                        <p className='line-through text-sm mt-1'>$30.00</p>
                    </div>
                    <button className='absolute w-[275px] h-12 mt-2 btn bg-[#FCE6E6] text-primary font-semibold text-base'> ADD TO CART</button>
                </div>
                {/* product 3 */}
                <div className=" w-[315px] h-[420px] bg-[#FFFFFF] shadow-[0_3px_8px_rgba(11,50,93,0.08)] rounded-xl p-4">
                    <div className="absolute w-[283px] h-[240px] bg-[#F3F6F8] rounded-md">
                        <div className='ml-14 mt-[25px] mb-[25px]'>
                            <Image src='/shirt1.png' alt='' width="171.34px" height="190px"></Image>
                        </div>
                    </div>
                    <p className='absolute w-[213px] h-6 not-italic font-semibold text-lg text-[#1B2631] mt-[260px]'>Simple Product Title Here</p>
                    <div className='mt-[284px] w-[275px] h-10 flex items-center justify-start'>
                        <p className='text-primary text-lg font-medium mr-2'>$20.59</p>
                        <p className='line-through text-sm mt-1'>$30.00</p>
                    </div>
                    <button className='absolute w-[275px] h-12 mt-2 btn bg-[#FCE6E6] text-primary font-semibold text-base'> ADD TO CART</button>
                </div>
                {/* product 4 */}
                <div className=" w-[315px] h-[420px] bg-[#FFFFFF] shadow-[0_3px_8px_rgba(11,50,93,0.08)] rounded-xl p-4">
                    <div className="absolute w-[283px] h-[240px] bg-[#F3F6F8] rounded-md">
                        <div className='ml-14 mt-[25px] mb-[25px]'>
                            <Image src='/shirt4.png' alt='' width="171.34px" height="190px"></Image>
                        </div>
                    </div>
                    <p className='absolute w-[213px] h-6 not-italic font-semibold text-lg text-[#1B2631] mt-[260px]'>Simple Product Title Here</p>
                    <div className='mt-[284px] w-[275px] h-10 flex items-center justify-start'>
                        <p className='text-primary text-lg font-medium mr-2'>$20.59</p>
                        <p className='line-through text-sm mt-1'>$30.00</p>
                    </div>
                    <button className='absolute w-[275px] h-12 mt-2 btn bg-[#FCE6E6] text-primary font-semibold text-base'> ADD TO CART</button>
                </div>
                {/* product 5 */}
                <div className=" w-[315px] h-[420px] bg-[#FFFFFF] shadow-[0_3px_8px_rgba(11,50,93,0.08)] rounded-xl p-4">
                    <div className="absolute w-[283px] h-[240px] bg-[#F3F6F8] rounded-md">
                        <div className='ml-14 mt-[25px] mb-[25px]'>
                            <Image src='/shirt5.png' alt='' width="171.34px" height="190px"></Image>
                        </div>
                    </div>
                    <p className='absolute w-[213px] h-6 not-italic font-semibold text-lg text-[#1B2631] mt-[260px]'>Simple Product Title Here</p>
                    <div className='mt-[284px] w-[275px] h-10 flex items-center justify-start'>
                        <p className='text-primary text-lg font-medium mr-2'>$20.59</p>
                        <p className='line-through text-sm mt-1'>$30.00</p>
                    </div>
                    <button className='absolute w-[275px] h-12 mt-2 btn bg-[#FCE6E6] text-primary font-semibold text-base'> ADD TO CART</button>
                </div>
                {/* product 6 */}
                <div className=" w-[315px] h-[420px] bg-[#FFFFFF] shadow-[0_3px_8px_rgba(11,50,93,0.08)] rounded-xl p-4">
                    <div className="absolute w-[283px] h-[240px] bg-[#F3F6F8] rounded-md">
                        <div className='ml-14 mt-[25px] mb-[25px]'>
                            <Image src='/shirt6.png' alt='' width="171.34px" height="190px"></Image>
                        </div>
                    </div>
                    <p className='absolute w-[213px] h-6 not-italic font-semibold text-lg text-[#1B2631] mt-[260px]'>Simple Product Title Here</p>
                    <div className='mt-[284px] w-[275px] h-10 flex items-center justify-start'>
                        <p className='text-primary text-lg font-medium mr-2'>$20.59</p>
                        <p className='line-through text-sm mt-1'>$30.00</p>
                    </div>
                    <button className='absolute w-[275px] h-12 mt-2 btn bg-[#FCE6E6] text-primary font-semibold text-base'> ADD TO CART</button>
                </div>
                {/* product 7 */}
                <div className=" w-[315px] h-[420px] bg-[#FFFFFF] shadow-[0_3px_8px_rgba(11,50,93,0.08)] rounded-xl p-4">
                    <div className="absolute w-[283px] h-[240px] bg-[#F3F6F8] rounded-md">
                        <div className='ml-14 mt-[25px] mb-[25px]'>
                            <Image src='/shirt7.png' alt='' width="171.34px" height="190px"></Image>
                        </div>
                    </div>
                    <p className='absolute w-[213px] h-6 not-italic font-semibold text-lg text-[#1B2631] mt-[260px]'>Simple Product Title Here</p>
                    <div className='mt-[284px] w-[275px] h-10 flex items-center justify-start'>
                        <p className='text-primary text-lg font-medium mr-2'>$20.59</p>
                        <p className='line-through text-sm mt-1'>$30.00</p>
                    </div>
                    <button className='absolute w-[275px] h-12 mt-2 btn bg-[#FCE6E6] text-primary font-semibold text-base'> ADD TO CART</button>
                </div>
                {/* product 8 */}
                <div className=" w-[315px] h-[420px] bg-[#FFFFFF] shadow-[0_3px_8px_rgba(11,50,93,0.08)] rounded-xl p-4">
                    <div className="absolute w-[283px] h-[240px] bg-[#F3F6F8] rounded-md">
                        <div className='ml-14 mt-[25px] mb-[25px]'>
                            <Image src='/shirt8.png' alt='' width="171.34px" height="190px"></Image>
                        </div>
                    </div>
                    <p className='absolute w-[213px] h-6 not-italic font-semibold text-lg text-[#1B2631] mt-[260px]'>Simple Product Title Here</p>
                    <div className='mt-[284px] w-[275px] h-10 flex items-center justify-start'>
                        <p className='text-primary text-lg font-medium mr-2'>$20.59</p>
                        <p className='line-through text-sm mt-1'>$30.00</p>
                    </div>
                    <button className='absolute w-[275px] h-12 mt-2 btn bg-[#FCE6E6] text-primary font-semibold text-base'> ADD TO CART</button>
                </div>
            </div>
            <div className='flex items-center justify-center '>
                <button className='absolute w-[228px] h-14 btn bg-[#1B2631] text-white font-semibold text-base mt-[4990px] not-italic p-3'> See More Product</button>
            </div>
        </div>
    );
};

export default Products;