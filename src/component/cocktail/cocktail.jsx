import React, { Component} from 'react'
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
            <p>{this.state.cocktail.length}</p>
        )
    }
}

export default Cocktail;