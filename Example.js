<<<<<<< HEAD
import React from "react";
import { useLocation } from "react-router-dom";
import Card from "./newCard";
import Description from "./Description";
import './Example.css';
export default function Example(props){
    const location = useLocation();
    console.log("props",props);
    console.log(location," use Location hook");
    const data = location.state?.data ;
    return (
        <div className="exampleCard">
            <Card
            catImageUrl={data.url}
            nameOfCat={data.id}
            />
            <Description url = {data.url} id={data.id} name={data.title} />
        </div>
    )
    
=======
import React from "react";
import { useLocation } from "react-router-dom";
import Card from "./newCard";
import Description from "./Description";
import './Example.css';
export default function Example(props){
    const location = useLocation();
    console.log("props",props);
    console.log(location," use Location hook");
    const data = location.state?.data ;
    return (
        <div className="exampleCard">
            <Card
            catImageUrl={data.url}
            nameOfCat={data.id}
            />
            <Description url = {data.url} id={data.id} name={data.title} />
        </div>
    )
    
>>>>>>> 585964074a70623e5a25e3761ddfba9c84305d52
}