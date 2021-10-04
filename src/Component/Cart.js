import React, { Component } from 'react'

class Cart extends Component {
 
  render() {
    return (
    <div className="row"><br/>
      <h1 className="card col-sm-12">Cart</h1>
        {this.props.data.map((data,index)=>(data.quantity>0)?
          <div className="card col-sm-3" key={index}>
            <img className="card-img-top" src={`${data.images}`} alt="not available"/>
            <div className="card-body">
              <h5 className="card-title">{data.pname}</h5>
              <p className="card-text">Price: {data.price}</p>
              <p className="card-text">Quantity: {data.quantity}</p>
            </div>
          </div>:''
        )}
    </div>
    )
  }
}

export default Cart