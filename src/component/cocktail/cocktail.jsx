import React, { Component} from 'react'
import AddCocktail from './add-cocktail'
import axios from 'axios'

const BASE_URL = 'http://localhost:3456/'

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

    render(){
        return(
            [

            <div>{this.state.cocktail.map(cocktail => <p>{cocktail.name}</p>
            )}</div>,
            <AddCocktail />
        ]
        )
    }
}

export default Cocktail;