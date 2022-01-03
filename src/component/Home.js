import { useState, useEffect } from "react";


export default function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {

    }, [])

    return(
        <div className="home">
            <form className="search">
                <input className="search-input"/>
                <button className="search-btn">Enter</button>
            </form>
            <div className="recipe-container">
                <div className="recipe">
                    <div className="recipe-image"/>
                    <div className="recipe-name">Name</div>
                    <div className="recipe-overview">Overview</div>
                </div>
            </div>
        </div>
    );
};