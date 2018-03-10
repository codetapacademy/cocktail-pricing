import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL } from './constant'
import AddIngredient from './add-ingredient'
import './ingredient.css';

class Ingredient extends Component {
    state = {
        ingredient: [],
        formValueList: {
            "ingredient-currency": {
                value: '',
                valid: false
            },
            "ingredient-measure": {
                value: '',
                valid: false
            },
            "ingredient-name": {
                value: '',
                valid: false
            },
            "ingredient-price": {
                value: '',
                valid: false
            },
            "ingredient-quantity": {
                value: '',
                valid: false
            }
        },
        validForm: false 
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
            .map(({id, name, measure, currency, price, quantity}, key) => 
                <tr key={key}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{measure}</td>
                    <td>{currency}{price}</td>
                    <td>{quantity}</td>
                    <td>Act</td>
                </tr>
            );
    }

    checkIfFormIsValid = () => {
        const arr = Object
            .keys(this.state.formValueList)
            .map(ingredient => this.state.formValueList[ingredient].valid)
            .filter(valid => !valid)
        this.setState({validForm: !arr.length});
    }

    createIngredient = () => {
        const arr = Object.keys(this.state.formValueList);
        let data = {};
        arr.map(ingredientName => {
            const simpleName = ingredientName.split('-')[1];
            data[simpleName] = (simpleName === 'price' || simpleName === 'quantity') ? 
                parseInt(this.state.formValueList[ingredientName].value, 10) : 
                this.state.formValueList[ingredientName].value;
        });
        data.id = this.state.ingredient.length + 1;
        this.createIngredientInDataBase(data);
    }

    async createIngredientInDataBase(data) {
        await axios.put(`${BASE_URL}ingredient/${data.id}`, {
            'Content-Type': 'application/json',
            ...data,
            method: 'PUT'
        }).then(result => {
            console.log(result);
            debugger;
        }, error => {
            console.error(error);
            debugger;
        })
    }

    updateStateWithForm = (aParam) => {
        aParam.preventDefault();
        const {id, value, validity: {valid}} = aParam.target;
        if (id === 'create-it') {
            this.createIngredient();
        }
        
        const {formValueList} = this.state;
        formValueList[id] = {
            value,
            valid
        };
        this.setState({formValueList})
        this.checkIfFormIsValid();
    }
    render() {
        const { validForm } = this.state;
        return (
            [<table className="ingredient__full-table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Measure</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderIngredientList()}
                </tbody>
            </table>,
            <AddIngredient 
                addIngredientListener={this.updateStateWithForm}
                validForm={validForm}/>]
        );
    }
}

export default Ingredient;