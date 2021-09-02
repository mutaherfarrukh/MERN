import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state={
            "likes" : this.props.likes
        }
    }

    render(){
        const addLike = () => {
            this.setState({
                "likes" : this.state.likes+1
            })
        }
        return(
            <div>
                <h1>{this.props.lastname}, {this.props.firstname}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.haircolor}</p>
                <button onClick={addLike}>Likes: {this.state.likes}</button>
            </div>
        )
    }
}

export default PersonCard;