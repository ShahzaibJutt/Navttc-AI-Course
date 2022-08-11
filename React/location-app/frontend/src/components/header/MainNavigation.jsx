import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../backdrop/Backdrop';
import MainHeader from './MainHeader';
import './MainNavigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

const MainNavigation = () => {
    const [isDrawer, setIsDrawer] = useState(false);
    
    const openDrawerHandler = () => setIsDrawer(true);
    const closeDrawerHandler = () => setIsDrawer(false);
    return <>
    {
        isDrawer && (
            <Backdrop onClick = {closeDrawerHandler}/>
        )
    }       
    <SideDrawer show={isDrawer} onClick = {closeDrawerHandler}>
        <nav className='main-navigation__drawer-nav'>
            <NavLinks />
        </nav> 
    </SideDrawer>       
    
    <MainHeader>
        <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </button>
        <h1 className='main-navigation__title'>
            <Link>
                MyApp
            </Link>
        </h1>
        <nav className='main-navigation__header-nav'>
            <NavLinks />
        </nav>
    </MainHeader>
    </>
}

export default MainNavigation;