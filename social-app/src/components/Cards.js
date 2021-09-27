import React, { Component } from 'react';
import { Card } from './Card';

class Cards extends Component {
    state = { 
        users: [
            {
              id: 1,
              date: "21 January 2021",
              name: "David James",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              count: 0
            },
            {
              id: 2,
              date: "30 February 2020",
              name: "James Junior",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              count: 0
            },
            {
              id: 3,
              date: "31 September 2019",
              name: "Jessy Jane",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              count: 0
            },
            {
              id: 4,
              date: "31 June 2018",
              name: "William Davids",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              count: 0
            },
            {
              id: 5,
              date: "31 April 2017",
              name: "Johnson White",
              comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              count: 0
            },
          ]
     };

     count =(id)=> {
       const {users}= this.state
 let newUsers =  users.map(el=>{
   
    if(el.id===id){
      el.count=el.count +1
      console.log(el.count,id)
    }
    return el
  })    
  
  this.setState({user:newUsers})
  }
  
     count =(id)=> {
       const {users}= this.state
 let newUsers =  users.map(el=>{
   
    if(el.id===id){
      el.count=el.count +1
      console.log(el.count,id)
    }
    return el
  })    
  
  this.setState({user:newUsers})
  }
    
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
            
            {users.map((user,i) => <Card key={i} user={user} increaseCount={this.count}/>)}
            
       
        </div> );
        
    }
}

 
export default Cards;