import React, { Component} from 'react'
import AddCocktail from './add-cocktail'
import { BASE_URL } from './constant'
import axios from 'axios'


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

    render(){
        return(
            <div>
                <div>{this.state.cocktail.map((cocktail, key) => <p key={key}>{cocktail.name}</p>)}
                </div>
                <AddCocktail fbi={this.addCockTailToState} />
            </div>
        )
    }
}

export default Cocktail;