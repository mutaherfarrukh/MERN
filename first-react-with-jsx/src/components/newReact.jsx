import React,{Component} from 'react';

class NewReact extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1 className="text" >{this.props.message}</h1>
                <h2 className="text2">{this.props.msg}</h2>
                <h3>{this.props.list}</h3>
            </div>
        )
    }
}

export default NewReact;