import styles from '../../styles/banner.module.css'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className={styles.backgroundImg}>
            <div>
                <div>
                    <p className={(styles.discount)}>Use Code BACK2SCHOOL at checkout for 10% off entire order. </p>
                    <div>
                        <h1 className={styles.header1}>Match Your</h1>
                        <div className={styles.shoe}>
                            <Image src='/shoe.png' alt='' width="84px" height="84px"></Image>
                        </div >
                        <h1 className={styles.header2}>Favorite Sneakers!</h1>
                    </div>
                    <h3 className={styles.bottomText}>
                        Customize your Sneaker matching Tees or Hoodies to match your Favorite Kicks!
                    </h3>
                    <div className={styles.bottom}>
                        <button className={styles.bannerButton}>Start Your Design</button>
                        <h3 className='ml-4'>Shop Collection</h3>
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