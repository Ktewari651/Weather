import React, { useState } from 'react';
import { dataBase } from './Database';
import WeatherUpdate from './WeatherUpdate';
import './SearchBar.css'


const SearchBar = () => {
  const [data, setData] = useState('')
  const [city, setCity] = useState('')


  const search = (event) => {
    const searchedData = event.target.value
    setData(searchedData)
    setCity('')


    //   Through Api :

    // fetch(`https://open-weather13.p.rapidapi.com/city/${data}/EN`, {
    //     method: 'GET',
    //     headers: {
    //         'x-rapidapi-key': '0429d7b0eamsh97c768235f47010p132313jsn9fcd37a4c2eb',
    //         'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    //     }
    // })
    // .then((response) => {
    //     response.json().then((data)=>{
    //          console.log(data)
    //     })
    // })
    // .catch((err) => {
    //     console.log("Error", err);
    // });

    dataBase.filter((item) => {
      if (item.city.toUpperCase() === searchedData.toUpperCase()) {
        setCity(item)
      }
    })
  };

  return (
    <div>
      <div>
        <input className='search' type='text' id="searchBar" placeholder="Search.." onChange={(event) => search(event)}></input>
      </div>
      <div>
        <WeatherUpdate item={city} />
      </div>
    </div>
  );
};

export default SearchBar;
