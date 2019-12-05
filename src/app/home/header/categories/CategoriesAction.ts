import { setFilterItemList } from "../../mainContent/ItemsList/ItemsListAction";
import { SET_ALL_CATEGORIES_LIST, SET_LOADING_CATEGORIES_LIST, SET_ACTIVE_CATEGORIE } from "./CategoriesConstants";
import { fetchJson } from "../../../../common/utils/apiUtils";
import Categories from "./Categories";
import { Item } from "../../mainContent/ItemsList/ItemsListTypes";

export type Categorie = {
    id: string;
    name: string;
}


type SetAllCategoriesActionType = {
    type: typeof SET_ALL_CATEGORIES_LIST;
    payload: ReadonlyArray<Categorie>;
};

type SetLoadingCategoriesActionType = {
    type: typeof SET_LOADING_CATEGORIES_LIST,
    payload: boolean;
};

type SetActiveCategoriesActionType = {
    type: typeof SET_ACTIVE_CATEGORIE,
    payload: string;
}

const setAllCategories = (categories: ReadonlyArray<Categorie>): SetAllCategoriesActionType => ({
    type: SET_ALL_CATEGORIES_LIST,
    payload: categories
});

const setLoadingCategories = (isLoading: boolean): SetLoadingCategoriesActionType => ({
    type: SET_LOADING_CATEGORIES_LIST,
    payload: isLoading
});

const setActiveCategories = (categorieId: string): SetActiveCategoriesActionType => ({
    type: SET_ACTIVE_CATEGORIE,
    payload: categorieId
});


export const filterCategories = (categorieId: string) => async(dispatch, getState) => {
    dispatch(setLoadingCategories(true));
    const filterList = getState().items.itemList.filter(({category_id: Id}:Item) => Id.toString() === categorieId);
    dispatch(setActiveCategories(categorieId));
    dispatch(setFilterItemList(filterList));
    dispatch(setLoadingCategories(false));
};

export const loadAllCategories = () => async(dispatch) => {
    const {data: categories} = await fetchJson(`categories`);
    dispatch(setAllCategories(categories));
};

export type CategorieActionType = 
    | SetAllCategoriesActionType | SetLoadingCategoriesActionType | SetActiveCategoriesActionType;