import { Item } from "./ItemsListTypes";
import { itemService } from "./ItemService";
import { SET_ITEM_LIST, SET_ITEM_LIST_LOADING, SET_FILTERED_ITEM_LIST, SET_SELECTED_ITEM } from "./ItemConstants";
import { push } from "connected-react-router";

type SetItemListActionType = {
    type: typeof SET_ITEM_LIST;
    payload: ReadonlyArray<Item>;
}

type SetFilterItemListActionType = {
    type: typeof SET_FILTERED_ITEM_LIST;
    payload: ReadonlyArray<Item>;
}

type SetListLoadingActionType = {
    type: typeof SET_ITEM_LIST_LOADING;
    payload: boolean;
}

type SetSelectedItemActionType = {
    type: typeof SET_SELECTED_ITEM;
    payload: Item;
}

const saveItemList = (items: ReadonlyArray<Item>):SetItemListActionType => ({
    type: SET_ITEM_LIST,
    payload: items
}); 

const setLoading = (loading: boolean):SetListLoadingActionType => ({
    type: SET_ITEM_LIST_LOADING,
    payload: loading
});

export const setFilterItemList = (filteredItems: ReadonlyArray<Item>): SetFilterItemListActionType => ({
    type: SET_FILTERED_ITEM_LIST,
    payload: filteredItems
});

const setSelectedItem = (item: Item): SetSelectedItemActionType => ({
    type: SET_SELECTED_ITEM,
    payload: item
});

export const loadAllItems = () => async (dispatch) => {
    dispatch(setLoading(true));
    const {data: items} = await itemService.fetchAllItems();
    dispatch(saveItemList(items));
    dispatch(setLoading(false));
};

export const selectItem = (id: string) => async(dispatch) => dispatch(push(`/item/${id}`));

export const fetchItemRecord = (id: string) => async(dispatch, getState) => {
    const {orginalItemList: list} = getState().items;
    let seletcItem = list.find((i: Item) => i.id === id);
    if (!seletcItem) {
        [seletcItem] = await itemService.fetchItem(id);
    }
    dispatch(setSelectedItem(seletcItem));
};

export type ItemsLIstActionType = 
    | SetItemListActionType | SetListLoadingActionType | SetFilterItemListActionType | SetSelectedItemActionType;