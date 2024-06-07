import styles from './More.module.scss';
import moreInfoImage from '../assets/moreInfo.jpg';
export default function More(){
    return(
        <section id="more-info">
            <div className="container">
                <div className={styles.moreWrapper}>
                    <img src={moreInfoImage} alt="" className={styles.moreImage}></img>
                    <div className={styles.moreInfo}>
                        <h3 className={styles.title}>回收動起來</h3>
                        <p className={styles.description}>珍惜資源，了解環境保護的重要!</p>
                        <a href="https://www.youtube.com/watch?v=IJydi90-el4" target="_blank" className="action">看更多</a>
                    </div>
                </div>
            </div>
        </section>
    )
}