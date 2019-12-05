import React from 'react';
import styles from './HomeContent.css';
import ItemsList from './ItemsList';
import Categories from '../header/categories';

const HomeContent = () => (
    <div className={styles.container}>
        <Categories />
        <ItemsList />
    </div>
);

export default HomeContent;