import React from 'react'

import henry from "./henry.jpg"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faReply} from '@fortawesome/free-solid-svg-icons'
import "./cad.css"
import { dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


dom.watch()
library.add(faHeart, faReply)

// function count() {
//     console.log('Button Clicked')
    
// }

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
    marginTop: "1px",
    width: "90%",
    padding: "1px",
    position: "relative",
    textAlign: "left",
 } 

export const Card = ({user,increaseCount}) => {
    return (
        
        <div className="d-flex cardInner">
            <img src={henry} alt="" className="avatar"/>
            <div className="sideCon">
            <div className="d-flex headDate">
                    <div style = {name}> {user.name}</div>
                    <div style = {date}> {user.date}</div>
                </div>
                <p style={comment}>{user.comment}</p>
                
                <div className = "icons">
                <i id = "btn" className= {"heart"} >                
                    <span id= "display"
                    style = {{fontSize:'18px', position: 'absolute', marginLeft: '30px', marginTop: '-2px'} 
                    }>0
                    </span>
                    <FontAwesomeIcon icon={faHeart}/>
                    </i>
                <i id = "btn" className= "reply" onClick={()=>increaseCount(user.id)}>
                <span id= "display" 
                    style = {{fontSize:'18px', position: 'absolute', marginLeft: '-30px', marginTop: '-2px'} 
                    }>{user.count}
                    </span><FontAwesomeIcon icon={faReply}/></i>
                </div>                
            </div>
            </div>                        
    )
}

