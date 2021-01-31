import React, { Component } from 'react'
import axios from "axios";
export default class AddItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName:'',
            itemTitle :'',
            image:'',
            description :'',
            price:'',
            stateItem:''
             
        }
    }
    ChangHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
      }
      SubmitHandler=(e)=>{
        //   const itemTitle = this.state.itemTitle
        //   const image = this.state.image
        //   const description = this.state.description
        //   const price = this.state.price
        //   const stateItem = this.state.stateItem
        const {itemTitle ,image,description,price,stateItem}= this.state
        e.preventDefault()
        console.log(this.state)
        axios.post(`http://localhost:5000/AddItem?userName=${this.state.userName}`,{itemTitle,image,description,price,stateItem})
        .then(respons=>{
          console.log(respons.data)
        })
        .catch(error=>{
          console.log(error)
        })
      }
    
    
    render() {
        const {userName,itemTitle ,image,description,price,stateItem}= this.state
        return (
            <div>
               <form onSubmit={this.SubmitHandler}>
               userName  <input name='userName' value={userName} onChange={this.ChangHandler}></input>
               itemTitle   <input name='itemTitle' value={itemTitle} onChange={this.ChangHandler}></input>
               image  <input name='image' value={image} onChange={this.ChangHandler}></input>
               description  <input name='description' value={description} onChange={this.ChangHandler}></input>
               price <input name='price' value={price} onChange={this.ChangHandler}></input>
               state <input name='stateItem' value={stateItem} onChange={this.ChangHandler}></input>

               <button type="submit">submit</button>

               </form>
            </div>

           

        )
    }
}
