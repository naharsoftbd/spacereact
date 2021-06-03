import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Menu  } from 'semantic-ui-react';
import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Barcode from './Barcode';
import axios from 'axios';
import { API_BASE_URL } from './config';
  
 

function App() {
  const [data, setData] = React.useState("Not Found");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header href="/">
              Home | 
            </Menu.Item>
            <Menu.Item as="a" header href="/barcode">
               Barcode
            </Menu.Item>
          </Container>
        </Menu>
      <Container text style={{ marginTop: '7em' }}>
       <Router>
        <Route path="/barcode" component={Barcode} />
       </Router>
      </Container>
      
    </div>
    
  );
}

export default App;
