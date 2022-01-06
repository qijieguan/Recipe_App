import uuid from 'react-uuid';

const Recipe = ({ id, recipe }) => {

    return (
        <div className="recipe" id={id}>
            <img src={recipe.recipe.image} className="recipe-image" alt=""/>
            <div className="recipe-name">{recipe.recipe.label}
                <span className="recipe-calories" style={caloriesStyle}>(cal. {Math.round(recipe.recipe.calories)})</span>
            </div>
            <div className="recipe-detail">
                <h1 style={{marginLeft: '5%', fontSize: '16px'}}>Ingredients</h1>
                <ul style={{listStylePosition: 'outside'}}>
                    {recipe.recipe.ingredients.map(ingredient => <li key={uuid()} className="recipe-ingredient">{ingredient.text}</li>)}
                </ul>
            </div>
        </div>
    );
}

const caloriesStyle = {
    fontSize: '16px',
    fontWeight: 'bolder',
    fontFamily: 'italic',
    alignSelf: 'flex-end',
    marginRight: '10px',
    color: 'lime'
}

export default Recipe;