import React, { useEffect, useState } from 'react';
import Card  from './Card.js';
import './App.css';
//main component
function App() {
  let scrl = 0;
  const [searchTerm, setSearchTerm] = useState(''); // creating the state for the searchTerm default is ""
  // here is a sets search term value on every change
  const handleInputChange = (searchValue) => {
    setSearchTerm(searchValue.target.value);
  };
  const [multiUserArray, setMultiUserArray] = useState([]);
  const imageUrls = ['https://robohash.org/1?set=set5','https://robohash.org/2?set=set5','https://robohash.org/3?set=set5','https://robohash.org/4?set=set5'];
  const [cardsData, setCardsData] = useState([
    { nameOfCat: "billy", emailOfCat: "cat1@gmail.com", catImageUrl: imageUrls[0] },
    { nameOfCat: "vali", emailOfCat: "cat4@gmail.com", catImageUrl: imageUrls[1] },
    { nameOfCat: "catt", emailOfCat: "cat4@gmail.com", catImageUrl: imageUrls[2] },
    { nameOfCat: "batt", emailOfCat: "cat4@gmail.com", catImageUrl: imageUrls[3] }
  ]);

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
    // multi user array 
    useEffect(() => {
      // Log the updated multiUserArray
      console.log("Updated multiUserArray:", multiUserArray);
      const sampleArr = [...multiUserArray];
      const index = -1;
      multiUserArray.map(item =>{
        sampleArr[index+1]['name'] = item.name;
      })
    }, [multiUserArray]);


    // filtering cards
    const filteredCards = cardsData.filter((card) =>
    card.nameOfCat.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [] );
  // end of scroll function 

  return (
    <div className="App">
      <header className="App-header">
        <h1>API Guys</h1>
        <input
          className='searchInput'
          type='text'
          placeholder='Search by cat name...'
          value={searchTerm}
          onChange={handleInputChange}
        />
      </header>

      <div className='cards-section'>

        {filteredCards.map((card) => (
          <Card
            key= {card.nameOfCat}
            nameOfCat={card.nameOfCat}
            emailOfCat={card.emailOfCat}
            catImageUrl={card.catImageUrl}
          />
        ))}
        
      </div>
    </div>
  );
}
export default App;