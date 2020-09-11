import React from 'react';

import {Image, Row, Col, Container} from 'react-bootstrap';


const Img123 = ()=>{

  return(
    <Container>
      <Row>
        <Col lg={4} md={12} style={{fontSize:"10px"}}>Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..".</Col>
        <Col lg={4} md={6}>
          <Image style={{width:"100%", height:"100%"}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Sbo1_DbnNmulF6WGVxI3HwHaEK%26pid%3DApi&f=1"/>
        </Col>
        <Col lg={4} md={6}>
          <Image style={{width:"100%", height: "100%"}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_JP83o8mgfs%2Fmaxresdefault.jpg&f=1&nofb=1"/>
        </Col>
      </Row>
    </Container>
  )

}

export default Img123;
