import React, {Component} from 'react'
import { BASE_URL } from '../constant'
import axios from 'axios'

class AddCocktail extends Component{
    constructor(props) {
        super(props)
        this.somethingElse = null;
        this.pushCocktail = this.pushCocktail.bind(this)
    }

    async pushCocktail() {
        try {
            await axios
                .post(
                    `${BASE_URL}cocktail`,
                    {
                        name: this.somethingElse.value
                    },
                    {
                        'Content-Type': 'application/json',
                    }
                )
            this.props.fbi(this.somethingElse.value);
            this.somethingElse.value = '';
            this.somethingElse.focus();
        } catch (e) {
        }
    }

    handleEnter = (event) => {
        if(event.keyCode === 13) {
            this.pushCocktail();
        }
    }
    
    render(){
            return(
                <p>
                    <input
                        ref={qwe => this.somethingElse = qwe}
                        onKeyDown={this.handleEnter}
                        />
                    <button
                        onClick={this.pushCocktail}>
                        Carol is Awesome
                    </button>
                </p>

        )
    }
}

export default AddCocktail;