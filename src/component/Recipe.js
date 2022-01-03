import uuid from 'react-uuid';

const Recipe = ({ id, recipe }) => {

    return (
        <div className="recipe" id={id}>
            {console.log(recipe.recipe)}
            <img src={recipe.recipe.image} className="recipe-image" alt=""/>
            <div className="recipe-name">{recipe.recipe.label}</div>
            <div className="recipe-detail">
                <h1 style={{fontSize: '16px'}}>Ingredients</h1>
                {recipe.recipe.ingredients.map(ingredient => <li key={uuid()} className="recipe-ingredient">{ingredient.text}</li>)}
            </div>
        </div>
    );
}

export default Recipe;