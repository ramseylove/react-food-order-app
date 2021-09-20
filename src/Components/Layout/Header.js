import React from 'react';

import styles from './Header.module.css';
import mealsImage from '../../assests/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>REactMEals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt='table of food' />
            </div>
        </React.Fragment>
    )
}

export default Header;