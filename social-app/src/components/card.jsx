import React from 'react'
import henry from "./henry.jpg"

const cardInner = {
    width: "590px",
    height: "120px", 
    borderStyle: "outset",
    borderWidth: "5px",
    padding: "5px",           
}
const avatar = {
    verticalAlign: "middle",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    float: "left"
}
const name = {
    marginLeft: "60px",
    fontSize: "15px",
    position: "relative",           
}
const comment = {
    fontSize: "13px",
    position: "relative",
    textAlign: "left",
    marginLeft: "60px"
 }

export const Card = ({user}) => {
    return (
        <div style={cardInner}>
            <img src={henry} alt="" style= {avatar} />
            <h1 style={name}>{user.name}</h1>
            <p style={comment}>{user.comment}</p>
            </div>
    )
}