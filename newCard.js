<<<<<<< HEAD
import './App.css';
import React from 'react';
import newCard from './newCard';
import { Link } from 'react-router-dom';
export default function Card({nameOfCat,emailOfCat,catImageUrl}){
    const tempObj = {id:nameOfCat,title:emailOfCat,url:catImageUrl};

    return (
        <section className='card'>
          <img className="catImage" src={`https://robohash.org/${catImageUrl}`+"?set=set5"} alt={catImageUrl}></img>
          <h2 className='nameOfCat'>{nameOfCat}</h2>
          <p className="email">{emailOfCat}</p>
          </section>
    )
}
=======
import './App.css';
import React from 'react';
import newCard from './newCard';
import { Link } from 'react-router-dom';
export default function Card({nameOfCat,emailOfCat,catImageUrl}){
    const tempObj = {id:nameOfCat,title:emailOfCat,url:catImageUrl};

    return (
        <section className='card'>
          <img className="catImage" src={`https://robohash.org/${catImageUrl}`+"?set=set5"} alt={catImageUrl}></img>
          <h2 className='nameOfCat'>{nameOfCat}</h2>
          <p className="email">{emailOfCat}</p>
          </section>
    )
}
>>>>>>> 585964074a70623e5a25e3761ddfba9c84305d52
