import { ItemListState } from "./ItemsListTypes"
import { ItemsLIstActionType } from "./ItemsListAction"
import { SET_ITEM_LIST, SET_FILTERED_ITEM_LIST, SET_SELECTED_ITEM } from "./ItemConstants"

const defaultState = {
    itemList: [],
    orginalItemList: [],
    isLoading: false,
    selectedItem: {}
}

const ItemListReducer = (state:ItemListState = defaultState, action: ItemsLIstActionType) => {
    switch(action.type) {
        case SET_ITEM_LIST: {
            return {...state, itemList:action.payload, orginalItemList: action.payload}
        }
        case SET_FILTERED_ITEM_LIST: {
            return {...state, orginalItemList: action.payload}
        }
        case SET_SELECTED_ITEM: {
            return {...state, selectedItem: action.payload}
        }
        default: {
            return state;
        }
    }
}

export default ItemListReducer;