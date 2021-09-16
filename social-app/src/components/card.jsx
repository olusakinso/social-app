import React from 'react'
import henry from "./henry.jpg"
import "./cad.css"

const date = {
    fontSize: "10px",
    fontWeight: "100px",
    justifyContent: "space-between",
    width:"20%",
    marginRight: "10px"
}
const name = {
    fontSize: "13px",
    fontWeight: "900",    
}
const comment = {
    fontSize: "13px",
    width: "90%",
    position: "relative",
    textAlign: "left",
 }

export const Card = ({user}) => {
    return (
        <div className="d-flex cardInner">
            <img src={henry} alt="" className="avatar"/>
            <div className="sideCon">
            <div className="d-flex headDate">
                    <div style = {name}> {user.name}</div>
                    <div style = {date}> {user.date}</div>
                </div>
                <p style={comment}>{user.comment}</p>
            </div>
        </div>
    )
}
