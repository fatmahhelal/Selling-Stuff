(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{31:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),r=a(32),i=a.n(r),l=a(11),o=a(21),d=a(2),j=a(3),m=a(5),u=a(4),b=a(6),h=a.n(b),p=(a(57),a(9)),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this)).handleClick=function(e){console.log("Handling Fave click!"),s.setState({isFav:!s.state.isFav}),s.props.getFav(s.props.item,s.state.isFav)},s.state={isFav:!1},s}return Object(j.a)(a,[{key:"render",value:function(){var e=(this.state.isFave,"favorite");return Object(s.jsx)("div",{className:"material-icons  ".concat(e," heart"),onClick:this.handleClick,children:Object(s.jsx)("p",{className:"material-icons heart",children:e})})}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).getItemInfor=function(){h.a.get("/api/seller/OneItem?id=".concat(s.props.itemId)).then((function(e){console.log("RESPONSE: ",e),console.log("DATA: ",e.data),s.setState({itemInfo:e.data}),s.getSeller()}))},s.getSeller=function(){var e=s.state.itemInfo.sellerId;h.a.get("/api/seller/oneSellerId?id=".concat(e)).then((function(e){s.setState({sellerName:e.data.name,sellerContact:e.data.cotactInfo,number:e.data.phoneNumber}),console.log(e.data)})).catch((function(e){console.log("ERR: ",e)}))},s.state={itemInfo:[],sellerName:"",sellerContact:"",number:""},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getItemInfor()}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"boot",children:Object(s.jsxs)("div",{class:"myCard cardInfo boot",children:[Object(s.jsx)("img",{src:this.state.itemInfo.image,width:"800px",height:"500px"}),Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)(O,{}),Object(s.jsx)("h3",{class:"card-text",children:this.state.itemInfo.itemTitle}),Object(s.jsx)("p",{class:"card-text",children:this.state.itemInfo.description}),Object(s.jsxs)("p",{class:"card-text",children:["Item state: ",this.state.itemInfo.state]}),Object(s.jsxs)("p",{class:"card-text priceCon",children:[this.state.itemInfo.price," .SR"]}),Object(s.jsxs)("p",{class:"card-text",children:["Selling By: ",this.state.sellerName]}),Object(s.jsx)("div",{class:"d-flex justify-content-between align-items-center",children:Object(s.jsxs)("div",{class:"btn-group botCon",children:[Object(s.jsx)("p",{className:"pItem",children:"To communicate:"}),Object(s.jsx)("a",{href:"mailto:"+this.state.sellerContact+"?subject=your title&body=TThe message",children:Object(s.jsx)("img",{src:"https://img.icons8.com/nolan/64/email.png"})}),Object(s.jsx)("a",{href:"https://wa.me/"+this.state.number+"/?text=urlencodedtext",target:"_blank",children:Object(s.jsx)("img",{src:"https://img.icons8.com/cute-clipart/64/000000/whatsapp.png"})})]})})]})]})})})}}]),a}(n.Component),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=window.location.pathname.split("/ItemInfo/:");return Object(s.jsx)("div",{className:"topHeader",children:Object(s.jsx)(x,{itemId:e[1]})})}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).handleNew=function(){s.props.handleItemInfo(s.props.item._id),window.open("/ItemInfo")},s.getItemInfor=function(){h.a.get("/api/seller/OneItem?id=".concat(s.props.item._id)).then((function(e){console.log("RESPONSE: ",e),console.log("DATA: ",e.data),s.setState({Item:e.data})}))},s.state={Item:[],sellerName:"",sellerContact:"",number:""},s}return Object(j.a)(a,[{key:"componentWillUpdate",value:function(){localStorage.setItem("sellerName",JSON.stringify(this.state.sellerName)),localStorage.setItem("sellerContact",JSON.stringify(this.state.sellerContact))}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"boot",children:Object(s.jsxs)("div",{class:"card",children:[Object(s.jsx)("img",{src:this.props.item.image,width:"300px",height:"300px"}),Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)(O,{getFav:this.props.getFav,removeFav:this.props.removeFav,item:this.props.item}),Object(s.jsx)("h3",{class:"card-text",children:this.props.item.itemTitle}),Object(s.jsxs)("p",{class:"card-text priceCon",children:[this.props.item.price," .SR "]}),Object(s.jsx)("div",{class:"d-flex justify-content-between align-items-center",children:Object(s.jsx)("div",{class:"btn-group botCon",children:Object(s.jsx)(p.b,{to:"/ItemInfo/:".concat(this.props.item._id),children:Object(s.jsx)("button",{type:"button",class:"form-group buttonCard",onClick:"window.open('/ItemInfo')",children:"More"})})})})]})]})})}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this,t=this.props.ItemState.map((function(t,a){return Object(s.jsx)(g,{item:t,ItemId:t._id,removeFav:e.props.removeFav,getFav:e.props.getFav,AddItemToArray:e.props.AddItemToArray},a)}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"wel",children:"Welcome to the world of selling"}),Object(s.jsx)("div",{className:"topHeader boot",children:t})]})}}]),a}(n.Component),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).getSeller=function(){var e=s.props.item.sellerId;h.a.get("/api/seller/oneSellerId?id=".concat(e)).then((function(e){s.setState({sellerName:e.data.name,sellerContact:e.data.cotactInfo,number:e.data.phoneNumber}),console.log(e.data)})).catch((function(e){console.log("ERR: ",e)}))},s.state={Item:[],sellerName:"",sellerContact:"",number:""},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getSeller()}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"boot",children:Object(s.jsxs)("div",{class:"card",children:[Object(s.jsx)("img",{src:this.props.item.image,width:"300px",height:"300px"}),Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)("div",{className:"material-icons favorite",onClick:this.props.removeFav,children:Object(s.jsx)("i",{class:"material-icons",children:"favorite"})}),Object(s.jsx)("h3",{class:"card-text",children:this.props.item.itemTitle}),Object(s.jsxs)("p",{class:"card-text priceCon",children:[this.props.item.price," .SR "]}),Object(s.jsx)("div",{class:"d-flex justify-content-between align-items-center",children:Object(s.jsx)("div",{class:"btn-group botCon",children:Object(s.jsx)(p.b,{to:"/ItemInfo/:".concat(this.props.item._id),children:Object(s.jsx)("button",{type:"button",class:"form-group buttonCard",onClick:"window.open('/ItemInfo')",children:"More"})})})})]})]})})}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentWillUpdate",value:function(){localStorage.setItem("FavArray",JSON.stringify(this.props.FavArray))}},{key:"render",value:function(){var e=this,t=this.props.FavArray.map((function(t,a){return Object(s.jsx)(I,{item:t,getFav:e.props.getFav,removeFav:e.props.removeFav},a)}));return Object(s.jsxs)("div",{className:"topHeader",children:[Object(s.jsx)("h1",{children:"Your Favorite List"}),Object(s.jsx)("button",{type:"button",class:"btn btn-outline-danger btnMore",onClick:this.props.deleteFav,children:" Clear List"}),Object(s.jsx)("div",{className:"topHeader boot",children:t})]})}}]),a}(n.Component),N=a(7),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this,t=this.props.searchResultArray.map((function(t,a){return Object(s.jsx)(g,{item:t,removeFav:e.props.removeFav,getFav:e.props.getFav},a)}));return Object(s.jsx)("div",{className:"topHeader boot",children:t})}}]),a}(n.Component),C=(a(31),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).ChangHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.SubmitHandler=function(e){e.preventDefault(),console.log("bring state",s.state),h.a.post("/api/seller/addUser",s.state).then((function(e){console.log(e.data),s.setState({userName:"",name:"",cotactInfo:"",password:"",welcomeText:"You have account now"})})).catch((function(e){console.log(e),s.setState({errorMes:"the username already used "})})),s.setState({userName:"",name:"",cotactInfo:"",phoneNumber:"",password:"",welcomeText:"You have account now"})},s.state={userName:"",name:"",cotactInfo:"",password:"",welcomeText:"",phoneNumber:"",errorMes:""},s}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.userName,a=e.name,n=e.cotactInfo,c=e.phoneNumber,r=e.password;return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"myCard",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-6 b",children:Object(s.jsxs)("div",{className:"myLeftCtn",children:[Object(s.jsx)("header",{children:this.state.welcomeText}),Object(s.jsx)("p",{children:this.state.errorMes}),Object(s.jsxs)("form",{className:"myForm text-center",onSubmit:this.SubmitHandler,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("i",{className:"fa fa-user"}),Object(s.jsx)("input",{className:"myInput",type:"text",placeholder:" enter your username",name:"userName",value:t,onChange:this.ChangHandler,required:!0})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("i",{className:"fa fa-user-circle-o"}),Object(s.jsx)("input",{className:"myInput",type:"text",placeholder:"enter your name",name:"name",value:a,onChange:this.ChangHandler,required:!0})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("i",{className:"fa fa-envelope"}),Object(s.jsx)("input",{className:"myInput",type:"email",placeholder:"enter your Email",name:"cotactInfo",value:n,onChange:this.ChangHandler,required:!0})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("i",{className:"fa fa-volume-control-phone"}),Object(s.jsx)("input",{className:"myInput",type:"number",placeholder:"enter your Phone No",name:"phoneNumber",value:c,onChange:this.ChangHandler,required:!0})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("i",{className:"fa fa-key"}),Object(s.jsx)("input",{className:"myInput",type:"password",placeholder:"enter your password",name:"password",value:r,onChange:this.ChangHandler,required:!0})]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{class:"p-t-10",children:Object(s.jsx)("button",{className:"form-group btn",type:"submit",children:"sign up"})})]})]})}),Object(s.jsx)("div",{className:"col-md-6 c",children:Object(s.jsx)("div",{className:"myRightCtn",children:Object(s.jsxs)("div",{className:"box",children:[Object(s.jsx)("header",{children:"welcome"}),Object(s.jsx)("p",{children:"After registering, you will be able to view the items you want to sell. You can also delete or update the item"})]})})})]})})})}}]),a}(n.Component)),F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).deleteItem=function(e){e.preventDefault(),h.a.delete("/api/seller/itemDelete?id=".concat(s.props.item._id)).then((function(e){console.log("RESPONSE: ",e),console.log("DATA: ",e.data),s.setState({delMessage:"Item Deleted"})})).catch((function(e){console.log("ERR: ",e)}))},s.state={delMessage:""},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{id:"topHeader",className:"boot",children:Object(s.jsxs)("div",{class:"card",children:[Object(s.jsx)("img",{src:this.props.item.image,width:"300px",height:"300px"}),Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)("h3",{class:"card-text",children:this.props.item.itemTitle}),Object(s.jsxs)("p",{class:"card-text ratingCon",children:[this.props.item.price," .SR "]}),Object(s.jsx)("p",{className:"sellCard",children:this.state.delMessage}),Object(s.jsx)("div",{class:"d-flex justify-content-between align-items-center",children:Object(s.jsxs)("div",{class:"btn-group botCon",children:[Object(s.jsx)(p.b,{to:"/EditItem/:".concat(this.props.item._id),children:Object(s.jsx)("button",{type:"button",class:"btn btn-outline-success btnMore",onClick:"window.open('/EditItem')",children:"Edit"})}),Object(s.jsx)("a",{href:"",children:Object(s.jsxs)("button",{type:"button",class:"btn btn-outline-success btnMore",onClick:this.deleteItem,children:[" ","Delete"]})})]})})]})]})})}}]),a}(n.Component),A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.sellerItem.map((function(e,t){return Object(s.jsx)(F,{item:e},t)}));return Object(s.jsx)("div",{children:e})}}]),a}(n.Component),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).ChangHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.SubmitHandler=function(e){var t=s.state,a=t.itemTitle,n=t.image,c=t.description,r=t.price,i=t.state;e.preventDefault(),console.log(s.state),h.a.post("/api/seller/AddItem?userName=".concat(s.state.userName),{itemTitle:a,image:n,description:c,price:r,state:i}).then((function(e){console.log(e.data),s.setState({itemTitle:"",image:"",description:"",price:"",state:"",youAdded:"Item Added"})})).catch((function(e){console.log(e)}))},s.state={userName:"",itemTitle:"",image:"",description:"",price:"",state:"",youAdded:""},s}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.userName,a=e.itemTitle,n=e.image,c=e.description,r=e.price,i=e.state;return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md-6 b",children:Object(s.jsxs)("div",{className:"myLeftCtn add",children:[Object(s.jsx)("header",{children:"Add Item"}),Object(s.jsx)("h5",{className:"ItemAdd",children:this.state.youAdded}),Object(s.jsxs)("form",{className:"myForm text-center",onSubmit:this.SubmitHandler,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"username"}),Object(s.jsx)("input",{className:"myInput ad",type:"text",placeholder:" enter your username",name:"userName",value:t,onChange:this.ChangHandler,required:!0})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"item Title"}),Object(s.jsx)("input",{className:"myInput ad",type:"text",name:"itemTitle",value:a,onChange:this.ChangHandler,required:!0})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"image link"}),Object(s.jsx)("input",{className:"myInput ad",name:"image",value:n,onChange:this.ChangHandler})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"description"}),Object(s.jsx)("input",{className:"myInput ad",name:"description",value:c,onChange:this.ChangHandler,required:!0})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"item price"}),Object(s.jsx)("input",{className:"myInput ad",name:"price",value:r,onChange:this.ChangHandler,required:!0})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"item state"}),Object(s.jsx)("input",{className:"myInput ad",name:"state",value:i,onChange:this.ChangHandler})]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{class:"p-t-10",children:Object(s.jsx)("button",{className:"form-group btn addbtn",type:"submit",children:"Add"})})]})]})})})})}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).getsellerItem=function(){h.a.get("/api/seller/SellerItem?Id=".concat(s.props.sellerId)).then((function(e){console.log("getSellerItems: ",e),console.log("getSellerItemsData: ",e.data),s.setState({sellerItem:e.data})})).catch((function(e){console.log("ERR: ",e)}))},s.deleteAll=function(){h.a.delete("/api/seller/deleteAllItem?userId=".concat(s.props.sellerId)).then((function(e){console.log("RESPONSE: ",e),console.log("DATA: ",e.data),s.setState({delete:"Items Deleted"})})).catch((function(e){console.log("ERR: ",e)}))},s.openAddItem=function(){window.open("/AddItem","_self")},s.state={sellerItem:[],delete:""},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getsellerItem()}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"topHeader boot",children:[Object(s.jsxs)("h1",{children:["Hello, ",this.props.sellerName]}),Object(s.jsx)("h1",{children:"Your Items List"}),Object(s.jsx)("p",{className:"sellCard",children:this.state.delete}),Object(s.jsx)("button",{class:"btn btn-danger btnMore",onClick:this.deleteAll,children:"Delete All"}),Object(s.jsx)("button",{class:"btn btn-primary btnMore",onClick:this.openAddItem,children:"Add New Item"}),Object(s.jsx)(A,{sellerItem:this.state.sellerItem})]})}}]),a}(n.Component),R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).getsellerInfo=function(){h.a.get("/api/seller/oneSellerpas?userName=".concat(s.state.sellerName,"&password=").concat(s.state.password)).then((function(e){console.log("RESPONSE: ",e),console.log("DATA: ",e.data),console.log("id",e.data[0]._id),s.setState({login:!0}),s.props.handleLogin(e.data[0]._id,e.data[0].name)})).catch((function(e){console.log("ERR: ",e),s.setState({errorMes:"wrong password or username try again"})}))},s.state={sellerName:"",password:"",errorMes:"",sellerId:"",sellerItem:[],login:!1,name:""},s}return Object(j.a)(a,[{key:"componentWillUpdate",value:function(){localStorage.setItem("Item",JSON.stringify(this.state.sellerItem)),localStorage.setItem("sellerId",JSON.stringify(this.state.sellerId))}},{key:"render",value:function(){var e,t=this;return 0==this.props.userStatus?Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"myCard",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-6 b",children:Object(s.jsxs)("div",{className:"myLeftCtn",children:[Object(s.jsx)("header",{children:"Welcome Back"}),Object(s.jsx)("p",{children:this.state.errorMes}),Object(s.jsxs)("form",{className:"myForm text-center",onSubmit:this.SubmitHandler,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("i",{className:"fa fa-user"}),Object(s.jsx)("input",{className:"myInput",type:"text",placeholder:" enter your username",name:"userName",onChange:function(e){t.setState({sellerName:e.target.value})},required:!0})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("i",{className:"fa fa-key"}),Object(s.jsx)("input",{className:"myInput",type:"password",placeholder:"enter your password",name:"password",onChange:function(e){t.setState({password:e.target.value})}})]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{class:"p-t-10",children:Object(s.jsx)(p.b,{to:"/SellerInfo",children:Object(s.jsx)("button",(e={className:"form-group btn",type:"submit"},Object(l.a)(e,"type","submit"),Object(l.a)(e,"onClick",this.getsellerInfo),Object(l.a)(e,"children","sign in"),e))})})]})]})}),Object(s.jsx)("div",{className:"col-md-6 c",children:Object(s.jsx)("div",{className:" myRightCtnSignin ",children:Object(s.jsx)("div",{className:"box"})})})]})})}):Object(s.jsx)(N.a,{exact:!0,path:"/SellerInfo",component:function(e){return Object(s.jsx)(k,{})}})}}]),a}(n.Component),T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).titleChangeHandler=function(e){s.setState({itemTitle:e.target.value},(function(){console.log(s.state.itemTitle)}))},s.imgChangeHandler=function(e){s.setState({image:e.target.value},(function(){console.log(s.state.image)}))},s.descChangeHandler=function(e){s.setState({description:e.target.value},(function(){console.log(s.state.description)}))},s.priceChangeHandler=function(e){s.setState({price:e.target.value},(function(){console.log(s.state.price)}))},s.getItemInfor=function(){h.a.get("/api/seller/OneItem?id=".concat(s.props.itemId)).then((function(e){console.log("RESPONSE: ",e),console.log("DATA: ",e.data),s.setState({itemInfo:e.data,itemTitle:e.data.itemTitle,image:e.data.image,description:e.data.description,price:e.data.price})}))},s.editItem=function(e){e.preventDefault(),h.a.put("/api/seller/updateItem?id=".concat(s.props.itemId),{itemTitle:s.state.itemTitle,image:s.state.image,description:s.state.description,price:s.state.price}).then((function(e){console.log("RESPONSE: ",e),console.log("DATA: ",e.data),s.setState({updateMess:"Item Updated"})})).catch((function(e){console.log("ERR: ",e)}))},s.state={itemTitle:"",image:"",description:"",price:"",itemInfo:[],updateMess:""},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getItemInfor()}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md-6 b",children:Object(s.jsxs)("div",{className:"myLeftCtn add",children:[Object(s.jsx)("header",{children:"Update an Item"}),Object(s.jsx)("p",{className:"ItemAdd",children:this.state.updateMess}),Object(s.jsxs)("form",{className:"myForm text-center",children:[Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("label",{children:["Item Title",Object(s.jsx)("input",{type:"text",name:"ItemTitle",className:"myInput ad",onChange:this.titleChangeHandler,placeholder:this.state.itemInfo.itemTitle})]})}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("label",{children:["Image Link",Object(s.jsx)("input",{type:"text",name:"img",className:"myInput ad",onChange:this.imgChangeHandler,placeholder:this.state.itemInfo.image})]})}),Object(s.jsx)("br",{}),Object(s.jsxs)("label",{children:["Description",Object(s.jsx)("input",{type:"text",name:"description",className:"myInput ad",onChange:this.descChangeHandler,placeholder:this.state.itemInfo.description})]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("label",{children:["Item Price",Object(s.jsx)("input",{type:"text",name:"ItemPrice",className:"myInput ad",onChange:this.priceChangeHandler,placeholder:this.state.itemInfo.price})]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsx)("br",{}),Object(s.jsx)(p.b,{to:"/SellerInfo",children:Object(s.jsx)("button",{className:"form-group btn addbtn",onClick:this.editItem,children:"update"})})]})})})})}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=window.location.pathname.split("/EditItem/:");return Object(s.jsx)("div",{children:Object(s.jsx)(T,{itemId:e[1]})})}}]),a}(n.Component),H=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).handleLogin=function(e,t){s.setState({userStatus:!s.state.userStatus,loginSellerId:e,loginSellerName:t},(function(){console.log("loged in",this.state.loginSellerId)})),console.log(e)},s.componentDidMount=function(){s.getAllItem()},s.searchResult=function(){var e=s.state.searchWord,t="/api/seller/oneItemByName?itemTitle=".concat(e);h.a.get(t).then((function(e){e?(console.log("here search re: ",e.data),s.setState({searchResultArray:e.data})):console.log("no data ")})).catch((function(e){console.log("ERR: ",e)}))},s.getFav=function(e,t){var a=Object(o.a)(s.state.FavArray),n=a.indexOf(e);-1===n?(a.push(e),s.setState({FavArray:a},(function(){console.log("the Fav Array",this.state.FavArray)})),console.log(a)):(a.splice(n,1),s.setState({FavArray:a},(function(){console.log(this.state.FavArray)})))},s.removeFav=function(e,t){var a=Object(o.a)(s.state.FavArray);a.splice(e,1),s.setState({FavArray:a},(function(){console.log(this.state.FavArray)})),console.log(a)},s.deleteFav=function(){console.log("favorite array:",s.state.FavArray),s.setState({FavArray:[]})},s.getAllItem=function(){h.a.get("/api/seller/allItem").then((function(e){console.log("RESPONSE: ",e),console.log("DATA: ",e.data),s.setState({Item:e.data})})).catch((function(e){console.log("ERR: ",e)}))},s.state={FavArray:[],Item:[],searchResultArray:[],searchWord:"",userStatus:!1,ItemId:"",loginSellerItem:[],loginSellerName:"",loginSellerId:""},s}return Object(j.a)(a,[{key:"componentWillUpdate",value:function(){localStorage.setItem("favArray",JSON.stringify(this.state.favArray)),localStorage.setItem("userStatus",JSON.stringify(this.state.userStatus)),localStorage.setItem("searchResultArray",JSON.stringify(this.state.searchResultArray)),localStorage.setItem("loginSellerId",JSON.stringify(this.state.loginSellerId)),localStorage.setItem("loginSellerName",JSON.stringify(this.state.loginSellerName)),localStorage.setItem("userStatus",JSON.stringify(this.state.userStatus))}},{key:"render",value:function(){var e,t=this,a=[Object(s.jsxs)("div",{children:[Object(s.jsx)("a",{class:"navbar-brand",href:"#",children:"Selling"}),Object(s.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{class:"navbar-toggler-icon"})})]})],n=[Object(s.jsxs)("form",{class:"d-flex",action:"./Search",children:[Object(s.jsx)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){t.setState({searchWord:e.target.value})},value:this.state.searchWord}),Object(s.jsx)(p.b,{to:"/Search",children:Object(s.jsx)("button",(e={class:"fa fa-search"},Object(l.a)(e,"class","btn btn-outline-info"),Object(l.a)(e,"type","button"),Object(l.a)(e,"onClick",this.searchResult),Object(l.a)(e,"children"," Search"),e))})]})];return this.state.userStatus?Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(p.a,{children:[Object(s.jsx)("nav",{class:"navbar navbar-expand-md navbar-dark bg-dark fixed-top",children:Object(s.jsxs)("div",{class:"container-fluid",children:[a,Object(s.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarsExampleDefault",children:[Object(s.jsx)("ul",{class:"navbar-nav me-auto mb-2 mb-md-0",children:[{to:"/",title:"Home"},{to:"/Favorite",title:"Favorite"},{to:"/SellerInfo",title:"Personal"}].map((function(e,t){return Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)(p.b,{to:e.to,class:"nav-link","aria-current":"page",href:e.href,children:e.title})})}))}),n]})]})}),Object(s.jsx)(N.a,{exact:!0,path:"/",component:function(e){return Object(s.jsx)(f,{ItemState:t.state.Item,getFav:t.getFav,handleItemInfo:t.state.handleItemInfo})}}),Object(s.jsx)(N.a,{exact:!0,path:"/Favorite",component:function(e){return Object(s.jsx)(y,{FavArray:t.state.FavArray,getFav:t.getFav,removeFav:t.removeFav,deleteFav:t.deleteFav})}}),Object(s.jsx)(N.a,{exact:!0,path:"/SellerInfo",component:function(e){return Object(s.jsx)(k,{sellerId:t.state.loginSellerId,sellerName:t.state.loginSellerName,userStatus:t.state.userStatus,handleLogin:t.handleLogin})}}),Object(s.jsx)(N.a,{exact:!0,path:"/OldUser",component:function(e){return Object(s.jsx)(R,{handleLogin:t.handleLogin,userStatus:t.state.userStatus})}}),Object(s.jsx)(N.a,{exact:!0,path:"/AddItem",component:function(e){return Object(s.jsx)("addItem",{handleLogin:t.handleLogin,userStatus:t.state.userStatus})}}),Object(s.jsx)(N.a,{exact:!0,path:"/EditItem/:id",component:E}),Object(s.jsx)(N.a,{path:"/Search",render:function(e){return Object(s.jsx)(S,{searchResultArray:t.state.searchResultArray,getFav:t.getFav})}}),Object(s.jsx)(N.a,{exact:!0,path:"/ItemInfo/:id",component:function(e){return Object(s.jsx)(v,{})}})]})}):Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(p.a,{children:[Object(s.jsx)("nav",{class:"navbar navbar-expand-md navbar-dark bg-dark fixed-top",children:Object(s.jsxs)("div",{class:"container-fluid",children:[a,Object(s.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarsExampleDefault",children:[Object(s.jsx)("ul",{class:"navbar-nav me-auto mb-2 mb-md-0",children:[{to:"/",title:"Home"},{to:"/Favorite",title:"Favorite"},{to:"/NewSeller",title:"Sign up"},{to:"/OldUser",title:"Sign In"}].map((function(e,t){return Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)(p.b,{to:e.to,class:"nav-link","aria-current":"page",href:e.href,children:e.title})})}))}),n]})]})}),Object(s.jsx)(N.a,{exact:!0,path:"/",component:function(e){return Object(s.jsx)(f,{ItemState:t.state.Item,getFav:t.getFav,handleItemInfo:t.handleItemInfo})}}),Object(s.jsx)(N.a,{exact:!0,path:"/Favorite",component:function(e){return Object(s.jsx)(y,{FavArray:t.state.FavArray,getFav:t.getFav,removeFav:t.removeFav,deleteFav:t.deleteFav})}}),Object(s.jsx)(N.a,{exact:!0,path:"/NewSeller",component:C}),Object(s.jsx)(N.a,{exact:!0,path:"/EditItem/:id",component:function(e){return Object(s.jsx)(E,{userStatus:t.state.userStatus})}}),Object(s.jsx)(N.a,{exact:!0,path:"/AddItem",component:w}),Object(s.jsx)(N.a,{exact:!0,path:"/OldUser",component:function(e){return Object(s.jsx)(R,{handleLogin:t.handleLogin,userStatus:t.state.userStatus})}}),Object(s.jsx)(N.a,{exact:!0,path:"/ItemInfo/:id",component:function(e){return Object(s.jsx)(v,{})}}),Object(s.jsx)(N.a,{path:"/Search",render:function(e){return Object(s.jsx)(S,{searchResultArray:t.state.searchResultArray,getFav:t.getFav})}})]})})}}]),a}(c.a.Component);i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(H,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.0df5fad6.chunk.js.map