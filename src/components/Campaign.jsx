import Banner from './Banner.jsx';
import styles from './Campaign.module.scss';

export default function Campaign(){
    return(
        <section id="activity" className="activity">
            <div className="container">
                <div className={styles.bannerWrapper}>
                    <Banner bannerType="mainBanner" banner="mainBanner" title="innisfree" description="空瓶回收活動" link="https://www.innisfree.com.tw/about?id=campaign_bottle_re" />
                    <Banner bannerType="subBanner" banner="subBannerLeft" title="RE.UNIQLO" description="服裝回收再生行動" link="https://www.uniqlo.com/tw/collection/sustainability/l3/re-uniqlo/index.html" />
                    <Banner bannerType="subBanner" banner="subBannerRight" title="acer" description="未來怪回收活動" link="https://acerland.acer.com.tw/activity/page/51" />
                </div>
            </div>
        </section>
    )
}



