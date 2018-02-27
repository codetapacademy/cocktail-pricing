import React, { Component} from 'react'
import AddCocktail from './add-cocktail'
import { BASE_URL } from './constant'
import axios from 'axios'
import './cocktail.css'


class Cocktail extends Component{
    
    state = {
        cocktail:[]
    }
    
    async getCocktail() {
        let {data} = await axios.get(`${BASE_URL}cocktail`)
        this.setState({cocktail: data})
    }

 
    componentDidMount(){
        this.getCocktail()
    }

    addCockTailToState = (something) => {
        console.log(`carol is ultra ${something}`)
        this.setState({
            cocktail: [...this.state.cocktail, {
                name: something,
                id: this.state.cocktail.length  +1
            }]
        })
        console.log(this.state.cocktail)
    }

    renderCocktail = () => {
        return this
            .state
            .cocktail
            .map((cocktail, key) => 
                <p key={key} className='cocktail__item'>                 
                    <span>{cocktail.name}</span>
                    <span 
                        onClick={() => this.deleteCocktail(cocktail.id)}>
                        &times;
                        </span>                    
                </p>
            )
    }

    async deleteCocktail(id) {
        console.log(id);
        await axios.delete(`${BASE_URL}cocktail`, {
            id
        }, {
            'Content-Type': 'application/json'
        })
    }

    render(){
        return(
            <div>
                <div>{this.renderCocktail()}</div>
                <AddCocktail 
                    fbi={this.addCockTailToState} />
            </div>
        )
    }
}

export default Cocktail;