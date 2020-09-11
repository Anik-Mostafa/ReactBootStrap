// import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components'


//
// class Button extends Component{
//
//   exportPdf = () => {
//
//        html2canvas(document.querySelector("#capture")).then(canvas => {
//           document.body.appendChild(canvas);  // if you want see your screenshot in body.
//           const imgData = canvas.toDataURL('image/png');
//           const pdf = new jsPDF();
//           pdf.addImage(imgData, 'PNG', 0, 0);
//           pdf.save("download.pdf");
//       });
//
//    }
//   render(){
//     return(
//       <div id="capture">
//     <p>Hello in my life</p>
//     <span>How can hellp you</span>
//     <button onClick={this.exportPdf}> Click</button>
//   </div>
//     )
//   }
// }
//
//



 function Project() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)








  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const context = canvas.getContext("2d")
    context.scale(2,2)
    context.lineCap = "round"
    context.strokeStyle = "yellow"
    context.lineWidth = 10
    contextRef.current = context;


  }, [])

  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
    console.log(contextRef);
  }

  const finishDrawing = () => {
  contextRef.current.closePath()
  setIsDrawing(false)
  }

  const draw = ({nativeEvent}) => {
    if(!isDrawing){
      return
    }
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }
const exportPdf = () => {

     html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas);  // if you want see your screenshot in body.
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("download.pdf");
    });

 }
  return (
    <Styled>
    <div id='capture' >


    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    ><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.csmonitor.com%2Fcsm%2F2012%2F08%2F0802-olympics-badminton-indonesia.jpg%3Falias%3Dstandard_900x600&f=1&nofb=1"/></canvas>
    <button onClick={exportPdf}> Click</button>
    </div>
    </Styled>
  );
}

const Styled = styled.div`

background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.csmonitor.com%2Fcsm%2F2012%2F08%2F0802-olympics-badminton-indonesia.jpg%3Falias%3Dstandard_900x600&f=1&nofb=1");

`;

export default Project;
