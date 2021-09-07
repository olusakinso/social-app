import React, { Component } from 'react';
import { Card } from './Card';

class Cards extends Component {
    state = { 
        users: [
            {
              name: "Leanne Graham",
              comment: "",
              about: "Multi-layered client-server neural-net",
              avatar: "",
            },
            {
              name: "Ervin Howell",
              comment: "",
              about: "Proactive didactic contingency",
              avatar: "",
            },
            {
              name: "Clementine Bauch",
              comment: "",
              about: "Face to face bifurcated interface",
              avatar: "",
            },
            {
              name: "Patricia Lebsack",
              comment: "",
              about: "Multi-tiered zero tolerance productivity",
              avatar: "",
            },
          ]
     };
    
    render() { 
        const cardOuter = {
            color: "blue",
            width: "600px",
            height: "700px",            
            padding: "10px",
            marginLeft: "400px",
            marginTop: "40px"
       }
       const {users } = this.state

        return ( <div style={cardOuter}>
            
            {users.map((user,i) => <Card key={i} user={user}/>)}
       
        </div> );
    }
}
 
export default Cards;