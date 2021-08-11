import React from 'react';
// import arrayOfContent from "./components/arrayOfContent.json"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horns:0
        }
    }
        handelChange= async (e)=>{
            e.preventDefault();
            console.log(e.target.value);
            await  this.setState({
                horns:Number(e.target.value)
                // breed: e.target.breed.value,
            })
            this.props.sentSelectedElement(this.state.horns);

        }
        // sentSelectedElement=()=>{
            

        //     // this.state.horns
        // }

    
    render() {
        return (

            <div>
                <Form.Select aria-label="Default select example" name='horns' onChange={this.handelChange}>
                    <option value="0">All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="100">WOW</option>

                </Form.Select>
            </div>
        )
    }
}

export default Forms;