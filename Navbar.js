import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/cardsList"><li>Example</li></Link>
            </ul>
        </div>
    )
}