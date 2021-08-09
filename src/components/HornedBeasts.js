import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfVotes: 0
        }
    }
    increaseVotes = () => {
        this.setState({
            numberOfVotes: this.state.numberOfVotes + 1
        })
    }
    render() {
        return (

            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Button onClick={this.increaseVotes}>Vote</Button>
                        <Card.Text>
                        {this.state.numberOfVotes}
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* <h2> {this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.title} title ={this.props.title} />
                <p> {this.props.description}</p>
                <button onClick={this.increaseVotes}>Vote</button>
                <p> {this.state.numberOfVotes}</p> */}
            </div>
        )
    }
}

export default HornedBeasts;