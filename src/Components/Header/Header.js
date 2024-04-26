import React from 'react';
import classes from './Header.module.css'; 
import SearchBar from '../SeachBar';

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Text}>
        Weather
      </div>
      <div className={classes.search}>
       <SearchBar/>
      </div>
    </div>
  );
};

export default Header;
