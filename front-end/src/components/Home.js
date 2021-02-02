import React, { Component } from "react";
import Card from "./Card";

export default class Home extends Component {
  render() {
    const ItemCard = this.props.ItemState.map((Item, key) => {
      return (
        <Card
          key={key}
          item={Item}
          ItemId={Item._id}
          removeFav={this.props.removeFav}
          getFav={this.props.getFav}
          AddItemToArray={this.props.AddItemToArray}
          handleItemInfo={this.props.handleItemInfo}

        />
        
        // console.log('test',Item)
       
      );
    });
    return (

      <div><h1 className='wel'>Welcome to the world of selling</h1>
    <div className="topHeader boot">{ItemCard}</div>
    </div>);
  }

}



// constructor(props) {
//   super(props)

//   this.state = {

//     Item: [],
//     sellerName: "",
//     sellerContact: "",
//   }
// }
// getSeller = (sellerId) => {
//   // const sellerId = this.props.item.sellerId
//   axios
//     .get(`http://localhost:5000/oneSellerId?id=${sellerId}`)
//     .then((response) => {
//       this.setState({
//         sellerName: response.data.name,
//         sellerContact: response.data.cotactInfo

//       })
//       console.log(response.data)
//     })
//     .catch((err) => {
//       console.log('ERR: ', err);
//     });
// }
// componentWillUpdate() {
//   // localStorage Favorite item array so we don't need to stor in db
//   localStorage.setItem("sellerName", JSON.stringify(this.props.sellerName));
//   localStorage.setItem("sellerContact", JSON.stringify(this.state.sellerContact));
// }
// render() {
//   const ItemCard = this.props.ItemState.map((Item, key) => {
//     this.getSeller(Item.sellerId)
//     return (
//       <Card
//         key={key}
//         item={Item}
//         sellerName={this.state.sellerName}
//         // SellerName={seller}
//         // SellerItem= {seller.item}
//         removeFav={this.props.removeFav}
//         getFav={this.props.getFav}
//         AddItemToArray={this.props.AddItemToArray}
//       />
//       // console.log('test',item)
//       // console.log('key',key.userName)
//     );
//   });
//   return <div className="topHeader boot">{ItemCard}</div>;
// }

// }