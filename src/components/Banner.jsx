import PropTypes from 'prop-types';
import styles from './Banner.module.scss';

export default function Banner({bannerType, banner, title, description, link}){
    return(
        <div className={`backgroundImage ${styles[bannerType]} ${styles[banner]}`}>
            <h1 className={styles.bannerTitle}>{title}</h1>
            <p className={styles.bannerDescription}>{description}</p>
            <a className="action" href={link} target="_blank">活動詳情</a>
        </div>
    )
}

Banner.propTypes = {
    bannerType: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};