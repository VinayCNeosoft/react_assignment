import React, { Component } from 'react'
import data from '../Component/Products.json';
import Cart from '../Component/Cart'
export class Products extends Component {
    constructor(props){
         super(props);
         this.state={
             proData:[],
             count:0,
             countmain:0
            };
    }

    componentDidMount(){
        this.setState({proData:data.products})
        if(localStorage.getItem('mycart')!=undefined){
            let arr=JSON.parse(localStorage.getItem('mycart'));
            this.setState({count:arr.length});
        }
    }
    
    addCart=(id)=>{
       if(localStorage.getItem('mycart')!=undefined){
          let arr=JSON.parse(localStorage.getItem('mycart'));
          if(arr.includes(id))
            {
                alert("Product Already added");
                this.state.proData[id].quantity+=1
                console.log(this.state.proData)
                this.setState({countmain:0})
                this.state.proData.forEach((data) => {
                    this.state.countmain += data.quantity;
            });
        }
          else {
          arr.push(id);
          localStorage.setItem('mycart',JSON.stringify(arr));
          this.setState({count:arr.length});
          alert("Product added to Cart")
          this.state.proData[id].quantity+=1
          }
       }
       else {
           let arr=[];
           arr.push(id);
           localStorage.setItem('mycart',JSON.stringify(arr));
           alert("Product Add to Cart");
           this.state.proData[id].quantity+=1
            console.log(this.state.proData)
       }
    }

    render() {
        return (
            <>  
            <ul className="nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Cart {
                this.state.countmain=0,this.state.proData.forEach((data) => {
                        this.state.countmain += data.quantity;
                        })} {this.state.countmain}
                        <span className="badge badge-primary"></span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
            <center>
                <h2> Latest Products</h2>
                <hr/>
                <div className="row container">
                    {this.state.proData.map((pro,i)=>
                    <div className="col-md-3" key={i}>
                        <div className="card" >
                            <img className="card-img-top" src={pro.images} alt="not available"/>
                            <div className="card-body">
                                <h5 className="card-title">{pro.pname}</h5>
                                <p className="card-text">
                                    Price : <i>{pro.price}</i><br/>
                                    Quantity : <i>{pro.quantity}</i><br/>
                                </p>
                            
                                <button className="btn btn-primary" onClick={()=>this.addCart(pro.id)}>Add Cart</button>
                            </div>
                        </div>
                    </div>)}
                </div>
                </center>

                <Cart data={this.state.proData}/>
            </>
        )
    }
}

export default Products