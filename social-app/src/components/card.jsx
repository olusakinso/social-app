import React, { Component } from 'react';
import henry from "./henry.jpg";

class Cards extends Component {
    state = {  }
    render() { 
        const cardOuter = {
            color: "blue",
            width: "600px",
            height: "700px",
            
            padding: "10px",
            marginLeft: "400px",
            marginTop: "40px"
       },
       cardInner = {
           width: "590px",
           height: "120px", 
           borderStyle: "outset",
           borderWidth: "5px",
           padding: "5px",           
       },
       avatar = {
           verticalAlign: "middle",
           width: "50px",
           height: "50px",
           borderRadius: "50%",
           float: "left"
       },
       name = {
           marginLeft: "60px",
           fontSize: "15px",
           position: "relative",           
       },
       comment = {
           fontSize: "13px",
           position: "relative",
           textAlign: "left",
           marginLeft: "60px"
        }

        return ( <div style={cardOuter}>
            <div inCard style={cardInner}>
            <img src={henry} alt="" style= {avatar} />
            <h1 style={name}>David James</h1>
            <p style={comment}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div inCard style={cardInner}>
            <img src={henry} alt="" style= {avatar} />
            <h1 style={name}>David James</h1>
            <p style={comment}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div inCard style={cardInner}>
            <img src={henry} alt="" style= {avatar} />
            <h1 style={name}>David James</h1>
            <p style={comment}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div inCard style={cardInner}>
            <img src={henry} alt="" style= {avatar} />
            <h1 style={name}>David James</h1>
            <p style={comment}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div inCard style={cardInner}>
            <img src={henry} alt="" style= {avatar} />
            <h1 style={name}>David James</h1>
            <p style={comment}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

        </div> );
    }
}
 
export default Cards;