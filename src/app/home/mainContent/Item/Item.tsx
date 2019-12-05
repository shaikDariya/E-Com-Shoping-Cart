import React from 'react';
import ItemImage from 'react-image';
import styles from './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../../../common/utils/Loading';
const Item = ({id, image, name, price, like_count: likeCount, selectItem}) => (
    <div className={styles.container} onClick={() => {console.log(selectItem); selectItem(id)}}>
        <div className={styles.imageContainer}>
            <ItemImage
                src={image} 
                loader={<Loading iconStyle="loaderLg"/>}
                width="100%"/>     
        </div>
        <div className={styles.detailsContainer}>
            <p>{name}</p>
            <div className={styles.priceContainer}>
                <p>&#165;{price}</p>
                {likeCount > 0 && (<div className={styles.likeContainer}>
                    <FontAwesomeIcon icon={faHeart} className={`${styles.likeIcon} fontIcon`}/>
                    <p>{likeCount}</p>
                </div>)}
            </div>
        </div>
    </div>
);

export default Item;