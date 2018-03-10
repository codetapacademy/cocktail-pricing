import React from 'react'
const AddIngredient = (props) => {
    console.log(props)
    const { addIngredientListener, validForm } = props;
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="ingredient-name">Name</label>
                    <input
                        type="text"
                        onChange={addIngredientListener}
                        required
                        minLength="3"
                        id="ingredient-name" />
                </div>
                <div>
                    <label htmlFor="ingredient-price">Price</label>
                    <input
                        type="number"
                        onChange={addIngredientListener}
                        id="ingredient-price" />
                </div>
                <div>
                    <label htmlFor="ingredient-quantity">Quantity</label>
                    <input
                        type="number"
                        onChange={addIngredientListener}
                        id="ingredient-quantity" />
                </div>
                <div>
                    <label htmlFor="ingredient-measure">Measure</label>
                    <select
                        onChange={addIngredientListener}
                        id="ingredient-measure"
                        required>
                        <option value="">choose something dude</option>
                        <option value="ml">ml</option>
                        <option value="unit">unit</option>
                        <option value="g">g</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="ingredient-currency">Currency</label>
                    <select
                        onChange={addIngredientListener}
                        id="ingredient-currency"
                        required>
                        <option value="">choose mf</option>
                        <option value="£">£</option>
                        <option value="$">$</option>
                        <option value="RON">RON</option>
                    </select>
                </div>
                <div>
                    <button
                        id="create-it"
                        disabled={!validForm}
                        onClick={addIngredientListener}
                        type="submit">Add ingredient</button>
                </div>
            </form>
        </div>
    )
}

export default AddIngredient;