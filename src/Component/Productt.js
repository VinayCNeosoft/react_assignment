import React, { Component } from 'react';
import data from '../Component/Products.json';
import Cart from '../Component/Cart'
class Productt extends Component {
  constructor(props){
    super(props);
    this.state={proData:[],count:0,countmain:0}; 
  }
  componentDidMount(){
    this.setState({proData:data.product})

    if(localStorage.getItem('mycart')!=undefined){
    let arr=JSON.parse(localStorage.getItem('mycart'));
     this.setState({count:arr.length});

    let arrquantity=JSON.parse(localStorage.getItem('mycartq'));
    this.setState({countmain:arr.length});

    }
  }
  
    
     
  addCart=(id)=>{
    if(localStorage.getItem('mycart')!=undefined){
      let arr=JSON.parse(localStorage.getItem('mycart'));
      let arrquantity=JSON.parse(localStorage.getItem('mycartq'));
      
      if(arr.includes(id)){
        alert("Product quantity Increased")
        let quant = this.state.proData[id].quantity
        this.setState({quant:quant+1});
        this.state.proData[id].quantity+=1
        console.log(this.state.proData)
        this.setState({countmain:0})
        this.state.proData.forEach((data) => {
          
          this.state.countmain += data.quantity;
           });
          
        console.log(arrquantity)
        arrquantity[id] = arrquantity[id]+1        
        this.state.countmain=0
        arrquantity.forEach((data) => {
          
        this.state.countmain = this.state.countmain + (data)
        });
       
      }else{
      arr.push(id);
      arrquantity.push(this.state.proData[id].quantity);

      localStorage.setItem('mycart',JSON.stringify(arr));
      this.setState({count:arr.length});
      localStorage.setItem('mycartq',JSON.stringify(arrquantity));
      alert("Product added to Cart")
      this.state.proData[id].quantity+=1
      this.setState({countmain:0})
      this.state.proData.forEach((data) => {
        
      this.state.countmain += data.quantity;
        });
           
       this.state.countmain = 0
       arrquantity.forEach((data) => {
         this.state.countmain = this.state.countmain + (data)
       });
      
      
      
      }
    }
    else{
      let arr=[];
     let arrquantity=[];
      arr.push(id);
      arrquantity.push(this.state.proData[id].quantity);
       console.log(arrquantity[id])
      localStorage.setItem('mycart',JSON.stringify(arr));
      localStorage.setItem('mycartq',JSON.stringify(arrquantity));
      this.setState({count:arr.length});
      alert("Product added to Cart")
       this.state.proData[id].quantity+=1
        console.log(this.state.proData)
         this.setState({countmain:0})
        this.state.proData.forEach((data) => {
          
         this.state.countmain += data.quantity;
          });
         
      this.state.countmain = 0
      arrquantity.forEach((data) => {
         this.state.countmain = this.state.countmain + (data)
       });
      
      
      
    }
  }
   
  render() {
    return (
      <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Cart{
        this.state.countmain=0,this.state.proData.forEach((data) => {
            this.state.countmain += data.quantity;
        })} {this.state.countmain}<span className="badge badge-primary"></span></a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

      <div className="row container-fluid " >

        {this.state.proData.map((pro,i)=>
          <div className="card col-md-4" key={i}>
          <img className="card-img-top " src={`${pro.image}`} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{pro.pname}</h5>
            <p className="card-text">Price: {pro.price}</p>
            <p className="card-text">Quantity added to Cart: {pro.quantity}</p>
            
            <button className="btn btn-primary" onClick={()=>this.addCart(pro.id)}>Add to cart</button>
            
          </div>
        </div>
          
          )}
      </div>
      <hr/>
          <Cart data={this.state.proData}/>
      </>
    )
  }
}

export default Productt
