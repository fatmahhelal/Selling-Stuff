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
                />
                // console.log('test',item)
                // console.log('key',key.userName)
            )

          
        })
        return (
            <div>
              {ItemCard}
            </div>
        )
    }
}
