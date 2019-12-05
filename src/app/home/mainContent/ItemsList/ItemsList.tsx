import React, {useEffect} from  'react';
import { connect } from 'react-redux';
import { RootState } from 'redux-store';
import Loading from '../../../../common/utils/Loading';
import styles from './ItemsList.css';
import Item from '../Item/Item';
import {Item as ItemType, ItemListState} from './ItemsListTypes';
import {loadAllItems, selectItem} from './ItemsListAction';

type ReduxProps = {
    loadAllItems: typeof loadAllItems;
}

type Props = ItemListState & ReduxProps;

const ItemsList = ({itemList, loadAllItems, isLoading, selectItem}: Props) => {
    useEffect(()=> {
        loadAllItems();
    }, [false]); // Dont call on ComponentDidUpdate
    return (
        <div className={styles.container}>
            {isLoading ? <Loading iconStyle="loaderLg" /> :
            itemList.map((p: ItemType) => <Item key={`${p.id}`} {...p} selectItem={selectItem} />)}
        </div>
    )
};
const mapStateToProps = (state: RootState) => ({
    isLoading: state.items.isLoading,
    itemList: state.items.orginalItemList
});
const mapDispatchToProps = ({
    loadAllItems,
    selectItem
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);