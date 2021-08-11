import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
// import arrayOfContent from "./components/arrayOfContent.json"

class App extends React.Component {

  
 
  render() {
    return (
      <>
        <Header />
        <Main />
        {/* <SelectedBeast /> */}
        <Footer />
      </>

    )
  }
}
export default App;

// I fixed the branches 