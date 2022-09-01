import styles from '../../styles/search.module.css'
import Image from 'next/image';
const Search = () => {
    return (
        <div className={styles.search}>
            <div>
                <div className={styles.backImage}>
                    <Image src='/Logo1.png' alt='' layout='fill' ></Image>
                </div>
                <div className={styles.smallImage}>
                    <Image src='/loader 1.png' alt='' width="25.2pxpx" height="24.27px"></Image>
                </div>
            </div>
            <div className={styles.logo}>
                <Image src='/logo.png' alt='' layout='fill'></Image>
            </div>
            <div className={styles.searchBox}>
                <button className={styles.button}> All Items</button>
                <input type="text" placeholder="Search Sneaker Collections" className="mx-32 p-3" />
            </div>
            <div className={styles.cart}>
                <div className={styles.love}>
                    <Image src='/vector.png' alt='' width="20px" height="18.5px"></Image>
                </div>
                <div className={styles.border}></div>
                <div> <Image src='/man.png' alt='' width="20px" height="18.5px"></Image> </div>
                <div className={styles.border}></div>
                <div> <Image src='/cart.png' alt='' width="20px" height="18.5px"></Image> </div>
                <p>Cart(0)</p>
            </div>
        </div>
    );
};

export default Search;