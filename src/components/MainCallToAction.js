import React from "react";

import {Container, Col, Button} from 'react-bootstrap';

const App = () =>{
  return(
    <Container>
    <Col style={{fontSize:"5vw", fontWeight:"800"}}>Font testing is on the go!</Col>
    <Button style={{backgroundColor:"pink", borderStyle:"none"}}>Test</Button>
    </Container>
  )
}


export default App;
