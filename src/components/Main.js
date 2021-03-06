import React from 'react';
import HornedBeasts from './HornedBeasts';
import "./HornedBeasts.css"
import arrayOfContent from "./arrayOfContent.json"
import SelectedBeast from './SelectedBeast';
import Forms from './Forms';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateOfModal: false,
            selectedImg: {},
            selectedImgFromForm: arrayOfContent
            // flag: false

        }
    }
    
    modalOpen = (elemet) => {
        // console.log(this.props.title);

        let elemet2 = arrayOfContent.find((item) => {
            if (item.title === elemet) {
                // console.log(item);
                return item;

            }

        })
        this.setState({
            stateOfModal: true,
            selectedImg: elemet2
        })


    }
    modalClose = () => {
        this.setState({
            stateOfModal: false
        })
    }
    sentSelectedElement = (SelectedElement) => {
        let newArray = [];
        // this.setState({
        //     flag : true,
        // })
        

        arrayOfContent.filter((item) => {
            if (SelectedElement === 0) {
                newArray.push(item);
            }
            else if (item.horns === SelectedElement) {
                newArray.push(item);
            }
            // console.log(newArray);
        })
        this.setState({
            selectedImgFromForm: newArray
        })
    }

    render() {

        return (
            <div className="card-css">
                <Forms
                    sentSelectedElement={this.sentSelectedElement}
                    flag={this.state.flag}

                />{
                    // this.state.flag?
                    this.state.selectedImgFromForm.map((item, idx) => {
                        return (<HornedBeasts
                            // selectedImgFromForm={this.state.selectedImgFromForm}
                            sentSelectedElement={this.sentSelectedElement}
                            modalOpen={this.modalOpen}
                            selectedImg={this.state.selectedImg}
                            key={idx}
                            imageUrl={item.image_url}
                            title={item.title}
                            description={item.description}
                        />)

                    })
                    // :arrayOfContent.map((item, idx) => {
                    //     return (<HornedBeasts
                    //         // selectedImgFromForm={this.state.selectedImgFromForm}
                    //         sentSelectedElement={this.sentSelectedElement}
                    //         modalOpen={this.modalOpen}
                    //         selectedImg={this.state.selectedImg}
                    //         key={idx}
                    //         imageUrl={item.image_url}
                    //         title={item.title}
                    //         description={item.description}
                            
                    //     />)

                    // })                                               
                }
                    



                <SelectedBeast
                    stateOfModal={this.state.stateOfModal}
                    modalClose={this.modalClose}
                    selectedImg={this.state.selectedImg}

                />

                {/* <HornedBeasts imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" title="UniWhal" description="A unicorn and a narwhal nuzzling their horns" />
                <HornedBeasts imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" title="Rhino Family" description="Mother (or father) rhino with two babies" />

                <HornedBeasts imageUrl="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" title="Head" description="Someone wearing a creepy unicorn head mask" />
             */}
            </div>
        )
    }
}

export default Main;