import PropTypes from 'prop-types';
import styles from './RecycleItem.module.scss';

export default function RecycleItem({image, title, recyclable, category}){
    return(
        <div className={styles.card} >
            <h3 className={styles.cardTitle}>{title}</h3>
            <img src={image} alt="item" className={styles.cardImg} />
            <div className={styles.cardText}>
                <h3 className={styles.cardRecycable}>{recyclable}</h3>
                <p className={styles.cardCategory}>{category}</p>
            </div>
        </div>
    )
}

RecycleItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    recyclable: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};