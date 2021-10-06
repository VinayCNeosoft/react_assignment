import React, { Component } from 'react'
import json from './Products.json'
import './style.css'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {proData:[],arrlen:'',cart:JSON.parse(localStorage.getItem('mycart')) }
    }
    componentDidMount(){
        this.setState({proData:json.products})
        if(localStorage.getItem('mycart')!==null){
            let arr=JSON.parse(localStorage.getItem('mycart'))
            console.log("arr",arr);
            let sum=0
            arr.map((d)=>{
                sum=sum+d.quantity
                return sum
            })
            this.setState({arrlen:sum})
        }
    }

    addCart=(id,quantity)=>{
        if(localStorage.getItem('mycart')!==null)
        {
            let arr=JSON.parse(localStorage.getItem('mycart'))
            console.log(arr)
            if(arr.some(e=>e.id===id)){
                arr.map((d)=>{
                    if(d.id===id){
                        return (d.quantity=d.quantity+1,quantity=d.quantity)
                    }
                    return arr
                })
                localStorage.setItem('mycart',JSON.stringify(arr))
                alert('Quantity Added !')
            }
            else{
                arr.push({id,quantity})
                localStorage.setItem('mycart',JSON.stringify(arr))
                alert('Product Added to Cart !')
            }
        }
        else{
            let arr=[{id,quantity}]
            arr.push()
            localStorage.setItem('mycart',JSON.stringify(arr))
            alert('Product Added to Cart !')
        }
    }

    displayCart=(event)=>{
        event.preventDefault()
        console.log(this.state.cart)
        if(localStorage.getItem('mycart')!== null){
            document.getElementById("carttable").style.visibility="visible";
        }
        else{
            document.getElementById("carttable").style.visibility="hidden";
        }
    }
    
    render() {
        return (
            <>
            <div className="container">
                <nav className="nav navbar-dark bg-dark">
                    <a className="nav-link" href=" ">Home</a>
                    <a className="nav-link" href=" ">About</a>
                    <a key={Math.random()} className="nav-link" href=" " onClick={()=>this.displayCart()}>
                        Cart <span>{this.state.arrlen}</span>
                    </a>
                    <a key={Math.random()} className="nav-link" href=" ">Disabled</a>
                </nav><br/>

                <h1 key={Math.random()}>Products</h1><br/>
                <div className="row container m-auto" key={Math.random()}>
                    {this.state.proData.map(pro =>
                        <div className="card-body col-sm-3 bg-light" key={Math.random()}>
                        <img className="card-img-top" height="200px" width="200px" src={pro.images} alt="not found" 
                        key={Math.random()}></img>
                        <p className="card-title" key={Math.random()}>{pro.pname}</p>
                        <p className="card-text" key={Math.random()}>
                            Price:<span style={{color:"blue",fontSize:"large", fontWeight:"bold"}} 
                            key={Math.random()}>${pro.price}</span>
                        </p>
                        <a key={Math.random()} href="" onClick={()=>this.addCart(pro.id,pro.quantity)}
                        className="btn btn-add">Add to Cart</a>
                        </div>)}
                </div>
                <div key={Math.random()} className="table-responsive container" id="carttable" style={
                {visibility:"visible"}}>
                    <h1>Your Cart Detail's</h1>
                    <table key={Math.random()} className="table table-hover table-bordered">
                    <thead key="thead">
                        <tr className="" key={Math.random()}>
                            <th key={Math.random()}>Product Id</th>
                            <th key={Math.random()}>Product Name</th>
                            <th key={Math.random()}>Product Quantity</th>
                            <th key={Math.random()}>Price Per Product</th>
                            <th key={Math.random()}>Total Price</th>
                        </tr>
                    </thead>
                    <tbody key="tbody">
                        {this.state.cart!==null && this.state.cart.map((pro)=>
                        (this.state.proData.map((d)=>
                        ((pro.id === d.id)?
                            <tr key={Math.random()}>
                                <td>{pro.id}</td>
                                <td >{d.pname}</td>
                                <td >{pro.quantity}</td>
                                <td >{d.price}</td>
                                <td >{d.price*(pro.quantity)}</td>
                            </tr>
                            :null)))
                            )}
                    </tbody>
                    </table>
                </div> 
            </div>
            </>
        )
    }
}
export default Product