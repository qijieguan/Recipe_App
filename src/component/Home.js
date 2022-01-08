import { useState, useEffect } from "react";
import Recipe from "./Recipe.js";
import uuid from 'react-uuid';

export default function Home() {

    const form = document.getElementById('search');
    const search = document.getElementById('search-input');

    const [data, setData] = useState([]);
    const [dataset, setDataset] = useState([]);
    const [activePage, setPage] = useState("1");
    const [query, setQuery] = useState('sushi');
    let apiURL = `${process.env.REACT_APP_BASE_URL}q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&from=0&to=60`;

    useEffect(() => {getRecipe();}, [query])

    const spliceData = (data) => {
        let arr = [];
        for (let i = 0; i < data.length; i += 12) {
            arr.push(data.slice(i, i+12));
        }
        setDataset(arr);
        setData(arr[0]);
    }

    const getRecipe = () => {
        fetch(apiURL).then(res => res.json()).then((data) => {
            spliceData(data.hits);
        });
    }

    const defaultPage = (number) => {
        document.getElementById(`page_${activePage}`).style.border = '0';
        document.getElementById(`page_${number}`).style.border = '4px solid limegreen';
        setPage(number);
    }

    const handlePage = (number) => {
        if (activePage === number) {return;}
        defaultPage(number);
        setData(dataset[number - 1]);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            const searchTerm = search.value;
            if (searchTerm) {
                setQuery(searchTerm);
                setData([]);
            }
            defaultPage("1");
        });    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.value) {
            setQuery(search.value);
            setData([]);
        }
        defaultPage("1");
    }

    return(
        <div className="home">
            <form id="search">
                <input id="search-input" placeholder="Enter recipe name"/>
                <button id="search-btn" onClick={handleSubmit}>Enter</button>
            </form>
            <div className="recipe-container">
                {data ?
                    data.map(recipe => <Recipe key={uuid()} id={uuid()} recipe={recipe}/>)
                    :
                    <div className="no-results">No results found</div>
                }
            </div>
            <div className="pagination">
                <li id={"page_1"} style={{border: '4px solid limegreen'}} onClick={()=>handlePage("1")}>1</li>
                <li id={"page_2"} onClick={()=>handlePage("2")}>2</li>
                <li id={"page_3"} onClick={()=>handlePage("3")}>3</li>
                <li id={"page_4"} onClick={()=>handlePage("4")}>4</li>
                <li id={"page_5"} onClick={()=>handlePage("5")}>5</li>
            </div>
        </div>
    );
};