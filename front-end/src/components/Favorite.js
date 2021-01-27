import React, { Component } from 'react'
import FavCard from './FavCard'
export default class Favorite extends Component {
    render() {
        const ItemCard = this.props.FavArray.map((item, key) => {
            return (
                <FavCard
                    key={key}
                    item={item}
                    getFav={this.props.getFav}
                    removeFav={this.props.removeFav}
                />
                // console.log('test',item)
                // console.log('key',key.userName)
            )
        })
        return (
            <div  className="topHeader boot">
                <h1>Your Favorite List</h1>
                <button type="button" class="btn btn-outline-danger btnMore" onClick={this.props.deleteFav}> Clear List</button>
                {ItemCard}
            </div>
        )
    }
}
