import styles from '../../styles/topBanner.module.css'

const TopBnner = () => {
    return (
        <div className={styles.topBanner}>
            <div>
                <h5 className={styles.leftPart}>Use Code BACK2SCHOOL at checkout for 10% off entire order.</h5>
            </div>

            <div className={styles.rightPart}>
                <p >Faq’s</p>
                <p >Need Help?</p>
                <p ><span className={styles.login}>Login </span> or <span className={styles.login}>Registration</span></p>
            </div>
        </div >
    );
};

export default TopBnner;