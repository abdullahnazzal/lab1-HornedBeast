import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeasts extends React.Component {
    // const[show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    constructor(props) {
        super(props);
        this.state = {
            numberOfVotes: 0,
           
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
                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.modalOpen} />
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
                
               
            </div>
        )
    }
}

export default HornedBeasts;