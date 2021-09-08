import React, { Component } from 'react';
import { Card } from './Card';

class Cards extends Component {
    state = { 
        users: [
            {
              name: "David James",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
              name: "James Junior",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
              name: "Jessy Jane",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
              name: "William Davids",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
              name: "Johnson White",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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