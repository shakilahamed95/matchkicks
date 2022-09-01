import styles from '../../styles/banner.module.css'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className={styles.backgroundImg}>
            <div>
                <div>
                    <p className=' ml-[285px] text-primary'>Use Code BACK2SCHOOL at checkout for 10% off entire order. </p>
                    <div className='absolute h-[144px] w-[633px] ml-[285px]  leading-normal text-accent'>
                        <h1 className=' mt-[215px] font-bold text-7xl'>Match Your</h1>
                        <div className='mt-[-90px] ml-[404px]'>
                            <Image src='/shoe.png' alt='' width="84px" height="84px"></Image>
                        </div >
                        <h1 className='font-bold text-7xl'>Favorite Sneakers!</h1>
                    </div>
                    <h3 className='absolute w-[575px] h-[56px] ml-[285px] mt-[370px] not-italic font-medium text-xl leading-7 text-accent'>
                        Customize your Sneaker matching Tees or Hoodies to match your Favorite Kicks!
                    </h3>
                    <div className='w-[429px] flex items-center justify-center mt-[460px] ml-[255px]'>
                        <button className=' h-[ 60px] not-italic font-medium px-4 py-6 gap-4 
                        w-[210px] bg-primary text-white drop-shadow-2xl rounded'>Start Your Design</button>
                        <h3 className='ml-5 not-italic font-medium text-xl'>Shop Collection</h3>
                    </div>

                </div>
                <div>
                    <div className={styles.imageCard1}>
                        <div className={styles.cardImage}>
                            <Image src='/image20.png' alt='' width="204px" height="228px"></Image>
                            <h1 className={styles.cardText}>Kiss of Death</h1>
                        </div>

                    </div>
                    <div className={styles.imageCard2}>
                        <div className={styles.cardImage}>
                            <Image src='/image55.png' alt='' width="204px" height="228px"></Image>
                            <h1 className={styles.cardText}>Kiss of Death</h1>
                        </div>

                    </div>
                    <div className={styles.imageCard3}>
                        <div className={styles.cardImage}>
                            <Image src='/image55.png' alt='' width="204px" height="228px"></Image>
                            <h1 className={styles.cardText}>Kiss of Death</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;