import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { filterCategories, loadAllCategories, Categorie } from './CategoriesAction';
import { RootState } from 'redux-store';
import { CategoriesState } from './CategoriesReducer';
import styles from './Categories.css';
import Loading from '../../../../common/utils/Loading';

type StateProps = CategoriesState;

type ReduxProps = {
    filterCategories: typeof filterCategories;
    loadAllCategories: typeof loadAllCategories;
    isActive: boolean;
}

type Props = StateProps & ReduxProps;
type CategorieRenderProps = Categorie & { filterCategories: typeof filterCategories; }
const CategorieRenderer = ({id, name, filterCategories, isActive}:CategorieRenderProps) => (
    <div className={styles.categorieItem}>
        <div className={`${isActive === id ? styles.activeItem: ''} ${styles.centerAlign}`} onClick={() => filterCategories(id)}>{name}</div>
    </div>
);

const Categories = ({filterCategories, loadAllCategories, isLoading, categories, isActive}: Props) => {
    useEffect(()=>{
        loadAllCategories();
    }, [false]);
    return (
        <div className={styles.container}>
            { isLoading ? (<Loading  iconStyle="loaderSm"/>):
                (categories.length > 0
                ? categories.map((c: Categorie) => <CategorieRenderer key={c.id} {...{...c, filterCategories, isActive}}  />)
                : <div>No Categories</div>)
            }
        </div>
    )
};


const mapStateToProps = (state: RootState) => ({
    isLoading: state.categorie.isLoading,
    categories: state.categorie.categories,
    isActive: state.categorie.activeCategorie
});

const mapDispatchToProps = ({
    filterCategories,
    loadAllCategories,
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);