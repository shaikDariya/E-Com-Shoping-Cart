import React, { Fragment } from 'react';
import styles from './Home.css';
import Header from './header/Header';
import HomeContent from './mainContent';

const Home = () => (
    <div className={styles.container}>
        <Header />
        <HomeContent />
    </div>
)

export default Home;