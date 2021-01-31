import React, { Component } from 'react'
import SellerCard from './SellerCard'



export default class SellerInfo extends Component {
    render() {
        const ItemCard = this.props.Item.map((Item, key) => {
          return (
            <SellerCard
              key={key}
              item={Item}
            />
           
          );
        });
        return <div className="topHeader boot">{ItemCard}</div>;
      }
    }

