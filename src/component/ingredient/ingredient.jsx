import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL } from './constant'
import './ingredient.css'

class Ingredient extends Component {
    state = {
        ingredient: []
    }

    componentWillMount() {
        axios
            .get(`${BASE_URL}ingredient`)
            .then(({data}) => {
                this.setState({ingredient: data})
            })
    }

    renderIngredientList = () => {
        return this.state.ingredient
            .map(({id, name, unit, currency, price, quantity}, key) => 
                <tr key={key}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{unit}</td>
                    <td>{currency}{price}</td>
                    <td>{quantity}</td>
                    <td>Act</td>
                </tr>
            );
    }
    render() {
        return (
            <table className="ingredient__full-table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Unit</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderIngredientList()}
                </tbody>
            </table>
        );
    }
}

export default Ingredient;