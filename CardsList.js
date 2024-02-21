<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Card  from './Card.js';
import Navbar from './Navbar.js';
import Example from './Example.js'
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

export default function CardsList(){
    let scrl = 0;
  const [searchTerm, setSearchTerm] = useState(''); // creating the state for the searchTerm default is ""
  // here is a sets search term value on every change
  const handleInputChange = (searchValue) => {
    setSearchTerm(searchValue.target.value);
  };
  const [multiUserArray, setMultiUserArray] = useState([]);
  // const imageUrls = ['https://robohash.org/1?set=set5','https://robohash.org/2?set=set5','https://robohash.org/3?set=set5','https://robohash.org/4?set=set5'];
  const [cardsData, setCardsData] = useState([]);

    useEffect(()=>{
      //new code
      async function fetchUsers(page) {
        const response = await fetch(
          `https://randomuser.me/api/?results=9&inc=id,name,email`
        );
        const result = await response.json();
        const formatedResult = result.results.map((item) => {
          return {
            id: item.id.name + item.id.value,
            name: item.name.first + " " + item.name.last,
            email: item.email
          };
        });
        
        setMultiUserArray(formatedResult);
        console.log('formatedResult',formatedResult);
      }
      fetchUsers();
    },[]);
  const filteredCards =
  searchTerm === ""
    ? multiUserArray
    : multiUserArray.filter((item) => {
        if (
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase())
        )
          return true;
        else return false;
      });
  //
  // start scroll effect 
  const [scrolledTo50Percent, setScrolledTo50Percent] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    // Calculate the scroll percentage
    const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

    // Check if the scroll percentage is greater than or equal to 50
    if (scrollPercentage >= 50) {
      setScrolledTo50Percent(true);
        scrl = scrl + 1;
      if(scrl<=1){
        console.log("scrolled more than 50 percent of page now");
        cardsData.push({ nameOfCat: "bat",   emailOfCat: "cat4@gmail.com", catImageUrl: 'https://robohash.org/11?set=set5' });
        cardsData.push({ nameOfCat: "bat2",   emailOfCat: "cat4@gmail.com", catImageUrl: 'https://robohash.org/12?set=set5'});
        cardsData.push({ nameOfCat: "bat3",   emailOfCat: "cat4@gmail.com", catImageUrl: 'https://robohash.org/13?set=set5'});
        cardsData.push({ nameOfCat: "bat4",   emailOfCat: "cat4@gmail.com", catImageUrl: 'https://robohash.org/14?set=set5'});
        console.log(cardsData);
        setCardsData([...cardsData]);
        setScrolledTo50Percent(false);
      }
    } 
  };

  useEffect(() => {
  // Log the updated multiUserArray
  console.log("Updated multiUserArray:", multiUserArray);

  // Update cardsData based on multiUserArray
  const updatedCardsData = cardsData.map((card, index) => {
    if (multiUserArray[index]) {
      return {
        ...card,
        nameOfCat: multiUserArray[index].name,
        emailOfCat: multiUserArray[index].email,
        // You may want to update other fields as well based on your structure
      };
    }
    return card;
  });

  // Update the state with the modified array
  setCardsData(updatedCardsData);
}, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [] );
  // end of scroll function 
console.log("filtereaaaaa",filteredCards);


const [selectedCard, setSelectedCard] = useState(null);
// Handle the click event and set the selectedCard state
  const handleCardClick = (cardDetails) => {
    setSelectedCard(cardDetails);
  };

return(
    <div className="main">
        <header className="App-header">
        <h1>API Guys</h1>
        <input
          className='searchInput' type='text' placeholder='Search by name...' value={searchTerm} onChange={handleInputChange}
        />
        </header>

        <div className='cards-section'>

        {filteredCards.map((card,index) => (
          <Card
            key= {card.name}
            nameOfCat={card.name}
            emailOfCat={card.email}
            catImageUrl={index}
            
          />
        ))}
        
      </div>
    </div>
)

} 

=======
import React, { useEffect, useState } from 'react';
import Card  from './Card.js';
import Navbar from './Navbar.js';
import Example from './Example.js'
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

export default function CardsList(){
    let scrl = 0;
  const [searchTerm, setSearchTerm] = useState(''); // creating the state for the searchTerm default is ""
  // here is a sets search term value on every change
  const handleInputChange = (searchValue) => {
    setSearchTerm(searchValue.target.value);
  };
  const [multiUserArray, setMultiUserArray] = useState([]);
  // const imageUrls = ['https://robohash.org/1?set=set5','https://robohash.org/2?set=set5','https://robohash.org/3?set=set5','https://robohash.org/4?set=set5'];
  const [cardsData, setCardsData] = useState([]);

    useEffect(()=>{
      //new code
      async function fetchUsers(page) {
        const response = await fetch(
          `https://randomuser.me/api/?results=9&inc=id,name,email`
        );
        const result = await response.json();
        const formatedResult = result.results.map((item) => {
          return {
            id: item.id.name + item.id.value,
            name: item.name.first + " " + item.name.last,
            email: item.email
          };
        });
        
        setMultiUserArray(formatedResult);
        console.log('formatedResult',formatedResult);
      }
      fetchUsers();
    },[]);
  const filteredCards =
  searchTerm === ""
    ? multiUserArray
    : multiUserArray.filter((item) => {
        if (
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase())
        )
          return true;
        else return false;
      });
  //
  // start scroll effect 
  const [scrolledTo50Percent, setScrolledTo50Percent] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    // Calculate the scroll percentage
    const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

    // Check if the scroll percentage is greater than or equal to 50
    if (scrollPercentage >= 50) {
      setScrolledTo50Percent(true);
        scrl = scrl + 1;
      if(scrl<=1){
        console.log("scrolled more than 50 percent of page now");
        cardsData.push({ nameOfCat: "bat",   emailOfCat: "cat4@gmail.com", catImageUrl: 'https://robohash.org/11?set=set5' });
        cardsData.push({ nameOfCat: "bat2",   emailOfCat: "cat4@gmail.com", catImageUrl: 'https://robohash.org/12?set=set5'});
        cardsData.push({ nameOfCat: "bat3",   emailOfCat: "cat4@gmail.com", catImageUrl: 'https://robohash.org/13?set=set5'});
        cardsData.push({ nameOfCat: "bat4",   emailOfCat: "cat4@gmail.com", catImageUrl: 'https://robohash.org/14?set=set5'});
        console.log(cardsData);
        setCardsData([...cardsData]);
        setScrolledTo50Percent(false);
      }
    } 
  };

  useEffect(() => {
  // Log the updated multiUserArray
  console.log("Updated multiUserArray:", multiUserArray);

  // Update cardsData based on multiUserArray
  const updatedCardsData = cardsData.map((card, index) => {
    if (multiUserArray[index]) {
      return {
        ...card,
        nameOfCat: multiUserArray[index].name,
        emailOfCat: multiUserArray[index].email,
        // You may want to update other fields as well based on your structure
      };
    }
    return card;
  });

  // Update the state with the modified array
  setCardsData(updatedCardsData);
}, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [] );
  // end of scroll function 
console.log("filtereaaaaa",filteredCards);


const [selectedCard, setSelectedCard] = useState(null);
// Handle the click event and set the selectedCard state
  const handleCardClick = (cardDetails) => {
    setSelectedCard(cardDetails);
  };

return(
    <div className="main">
        <header className="App-header">
        <h1>API Guys</h1>
        <input
          className='searchInput' type='text' placeholder='Search by name...' value={searchTerm} onChange={handleInputChange}
        />
        </header>

        <div className='cards-section'>

        {filteredCards.map((card,index) => (
          <Card
            key= {card.name}
            nameOfCat={card.name}
            emailOfCat={card.email}
            catImageUrl={index}
            
          />
        ))}
        
      </div>
    </div>
)

} 

>>>>>>> 585964074a70623e5a25e3761ddfba9c84305d52
