import React, { Component } from 'react';
import { Card } from './Card';

class Cards extends Component {
    state = { 
        users: [
            {
              date: "21 January 2021",
              name: "David James",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
              date: "30 February 2020",
              name: "James Junior",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
              date: "31 September 2019",
              name: "Jessy Jane",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
              date: "31 June 2018",
              name: "William Davids",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
              date: "31 April 2017",
              name: "Johnson White",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
          ]
     };
    
    render() { 
        const cardOuter = {
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