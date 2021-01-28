import React, { Component } from 'react'
import Card from './Card'
import Item from './Item'
export default class Home extends Component {
    render() {
        const ItemCard = this.props.SellerState.map((seller,key)=>{
            return(
                <Item

                key={key}
                SellerName={seller}
                SellerItem= {seller.item}
                getFav={this.props.getFav} 
                AddItemToArray={this.props.AddItemToArray}
                />
                // console.log('test',item)
                // console.log('key',key.userName)
            )

          
        })
        return (
            <div className="topHeader boot">
              {ItemCard}
            </div>
        )
    }
}
