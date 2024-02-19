import './App.css';
export default function Card({nameOfCat,emailOfCat,catImageUrl}){
  // console.log(catImageUrl);
//   console.log("name of cat ",nameOfCat," ",emailOfCat," ",catImageUrl);
    return (
        <section className='card'>
          <img className="catImage" src={catImageUrl} alt={catImageUrl}></img>
          <h2 className='nameOfCat'>{nameOfCat}</h2>
          <p className="email">{emailOfCat}</p>
        </section>
    )
}

export function TextToShow(){
    <p>Scrolled Now</p>
}