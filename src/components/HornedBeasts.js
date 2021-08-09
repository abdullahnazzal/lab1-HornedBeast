import React from 'react';

class HornedBeasts extends React.Component{
    constructor(props){
        super(props);
        this.state={
            numberOfVotes:0
        }
    }
    increaseVotes=()=>{
        this.setState({
            numberOfVotes:this.state.numberOfVotes+1
        })
    }
    render(){
        return (
            <div>
                <h2> {this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.title} title ={this.props.title} />
                <p> {this.props.description}</p>
                <button onClick={this.increaseVotes}>Vote</button>
                <p> {this.state.numberOfVotes}</p>
            </div>
        )
    }
}

export default HornedBeasts;