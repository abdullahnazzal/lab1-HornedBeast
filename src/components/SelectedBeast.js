import React from 'react';
// import arrayOfContent from "./components/arrayOfContent.json"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

class SelectedBeast extends React.Component {
    modalClose = () =>{
        this.props.modalClose()
    }
    render() {
        return (

            <div>                
                <Modal show={this.props.stateOfModal} onHide={this.modalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{ this.props.selectedImg.title}</Modal.Title>
                        {/* this.props.title */}
                    </Modal.Header>
                    <Card.Img  src={this.props.selectedImg.image_url}  />
                    {/* <img src={this.props.selectedImg.imageUrl} alt=""></img> */}
                    
                   
                    
                    <Modal.Body>{this.props.selectedImg.description}</Modal.Body>
                    
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