import styles from '../../styles/menu.module.css'
import Image from 'next/image';
const Menu = () => {
    return (
        <div className={styles.menucontainer}>
            <div className={styles.menubar}>
                <p>Home</p>
                <p>Products</p>
                <p>Design Lab</p>
                <p>Blog</p>
                <p>Others</p>
            </div>
            <div className={styles.menuRight}>
                <div className={styles.menuImage}>
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