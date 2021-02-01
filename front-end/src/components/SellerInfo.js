// import React, { Component } from 'react'
// import SellerCard from './SellerCard'



// export default class SellerInfo extends Component {
//     render() {
//         const ItemCard = this.props.Item.map((Item, key) => {
//           return (
//             <SellerCard
//               key={key}
//               item={Item}
//             />
           
//           );
//         });
//         return <div className="topHeader boot">{ItemCard}</div>;
//       }
//     }

import React, { Component } from 'react'
import SellerCard from './SellerCard'
import axios from "axios";



export default class SellerInfo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       addNewPage:false
    }
  }
  
  deleteAll =()=>{
    axios
      .delete(`http://localhost:5000/deleteAllItem?userId=${this.props.sellerId}`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });

    
  }
    render() {
        const ItemCard = this.props.Item.map((Item, key) => {
          return (
            
            <SellerCard
              key={key}
              item={Item}
            />
           
          );
        });
        
        return <div className="topHeader boot">
          <button onClick={this.deleteAll}>Delete All</button>
          <button>add new item</button>
          {ItemCard}
          
          
          </div>;

      }
    }



