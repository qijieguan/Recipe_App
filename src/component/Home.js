import { useState, useEffect } from "react";
import Recipe from "./Recipe.js";
import uuid from 'react-uuid';

export default function Home() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('beef');
    let apiURL = `${process.env.REACT_APP_BASE_URL}q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`;

    useEffect(() => {
        getRecipe();
    }, [query])

    const getRecipe = () => {
        fetch(apiURL).then(res => res.json()).then((data) => {
            setData(data.hits);
            console.log(data.hits);
        });
    }

    return(
        <div className="home">
            <form className="search">
                <input className="search-input"/>
                <button className="search-btn">Enter</button>
            </form>
            <div className="recipe-container">
                {data ?
                    data.map(recipe => <Recipe key={uuid()} id={uuid()} recipe={recipe}/>)
                    :
                    <div>No results found</div>
                }
            </div>
        </div>
    );
};