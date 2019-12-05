import React, { useEffect } from 'react';
import ItemImage from 'react-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { RootState } from 'redux-store';
import { fetchItemRecord } from '../ItemsList/ItemsListAction';
import {Item as ItemType} from '../ItemsList/ItemsListTypes';
import styles from './DetailsPage.css';
import Loading from '../../../../common/utils/Loading';

type Props = {
    match: {
        params: {
            id: string;
        }
    };
    item: ItemType;
    fetchItemRecord: typeof fetchItemRecord;
};

const DetailsPage = ({match:{params:{id}}, item, fetchItemRecord}: Props) =>{
    useEffect(() => {
        fetchItemRecord(id);
    }, [false]);
    const {name, description, like_count: likeCount, comment_count, price, is_sold_out, shipping_fee:shippingFee, image, category_id } = item;
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <ItemImage
                    src={image} 
                    loader={<Loading iconStyle="loaderLg"/>}
                    width="100%"/>     
            </div>
            <div className={styles.detailsContainer}>
                <p>{name}</p>
                {likeCount > 0 && (<div className={styles.likeContainer}>
                        <p>{likeCount}</p>
                    </div>)}
                <p>{description} </p>
                <div className={styles.priceContainer}>
                    <p>&#165;{price}</p>
                </div>
            </div>
            <div className={styles.checkoutBlock}>
                <div className={styles.checkoutPriceLeft}>
                    <p className={styles.itemPrice}>&#165;{price}</p>
                    <p className={styles.shippingPrice}>{shippingFee}</p>
                </div>
                <div className={styles.checkoutPriceRight}>
                    <button className={styles.checkoutBtn}>Checkout</button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state: RootState) => ({
    item: state.items.selectedItem
});
const mapDispatchToProps =({
    fetchItemRecord
})
export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);