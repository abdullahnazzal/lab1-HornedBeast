import React from 'react';
// import arrayOfContent from "./components/arrayOfContent.json"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
class SelectedBeast extends React.Component {
    render() {
        return (

            <div>                
                <Modal show={this.state.stateOfModal} onHide={this.modalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <img src={this.props.imageUrl} alt=""></img>
                    <Modal.Body>{this.props.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalClose}>
                            Close
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default SelectedBeast;