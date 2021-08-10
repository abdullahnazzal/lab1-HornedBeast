import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
// import arrayOfContent from "./components/arrayOfContent.json"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stateOfModal: false
    }
  }
  modalClose = () => {
    this.setState({
      stateOfModal: false
    })
  }
  modalOpen = () => {
    this.setState({
      stateOfModal: true
    })


  }
 
  render() {
    return (
      <>
        <Header />
        <Main modalOpen={this.modalOpen}/>
        {/* <SelectedBeast /> */}
        <Footer />
      </>

    )
  }
}
export default App;

// I fixed the branches 