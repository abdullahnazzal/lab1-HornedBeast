import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import SelectedBeast from './SelectedBeast';


class HornedBeasts extends React.Component {
    // const[show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    constructor(props) {
        super(props);
        this.state = {
            numberOfVotes: 0

        }
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         stateOfModal: false
    //     }
    //   }
    // modalOpen = () => {
    //     this.setState({
    //         stateOfModal: true,


    //     })

    // }
    // }
    // modalClose = () => {
    //     this.setState({
    //         stateOfModal: false
    //     })
    // }


    

    increaseVotes = () => {
        this.setState({
            numberOfVotes: this.state.numberOfVotes + 1
        })
    }
    sentElement=()=>{
        this.props.modalOpen(this.props.title);
        
    }

    render() {
        return (

            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.sentElement} />
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

                {/* <SelectedBeast
                    stateOfModal={this.state.stateOfModal}
                    modalClose={this.modalClose}
                /> */}

            </div>
        )
    }
}

export default HornedBeasts;