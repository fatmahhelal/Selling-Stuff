import React, { Component } from 'react'
import Card from './Card'

export default class Item extends Component {
    render() {

        const ItemCard = this.props.SellerItem.map((item,key)=>{
            return(
                <Card

                key={key}
                item= {item}
                SellerInfo= {this.props.SellerName}
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
