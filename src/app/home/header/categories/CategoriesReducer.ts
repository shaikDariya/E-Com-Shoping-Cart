import { CategorieActionType, Categorie } from "./CategoriesAction";
import Categories from "./Categories";
import { SET_ALL_CATEGORIES_LIST, SET_LOADING_CATEGORIES_LIST, SET_ACTIVE_CATEGORIE } from "./CategoriesConstants";

export type CategoriesState = {
    categories : ReadonlyArray<Categorie>;
    isLoading: boolean;
    activeCategorie: string;
}


const defaultState:CategoriesState = {
    categories : [],
    isLoading: false,
    activeCategorie: ''
}

const CategoriesReducer = (state = defaultState, action: CategorieActionType) => {
    switch(action.type) {
        case SET_ALL_CATEGORIES_LIST : {
            return {...state, categories: action.payload}
        }
        case SET_LOADING_CATEGORIES_LIST : {
            return {...state, isLoading: action.payload}
        }
        case SET_ACTIVE_CATEGORIE : {
            return {...state, activeCategorie: action.payload}
        }
        default : {
            return state;
        }
    }
};

export default CategoriesReducer;