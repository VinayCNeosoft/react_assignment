import React, { Component } from 'react'
import '../Component/style.css'
import ListDetails from './ListDetails'

class List extends Component 
{
    constructor() 
    {
        super();
        this.state = 
        {
            employee: 
            [
                {   id:101, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:102, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:103, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:104, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:105, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:106, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:107, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:108, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:109, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:110, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:111, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:112, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:113, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:114, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:115, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:116, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:117, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:118, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:119, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
                {   id:120, first_name:'Jose', last_name:'Stockham', yob:1985, city:'San Antonio', },
            ]
        };
    }   

    render() {
        const { employee} = this.state;
    
        return (
          <div>
            <h1 className="display-5 l-head"> 20 Employee Detail in List *</h1>
            <hr/>
                <ol className="list-group">
                {employee.map(item=>(
                    <li className="list-group-item list-group-item-info custom_li" key={item.id}>
                        
                        <span><b>Emp Id : </b>{item.id} </span>
                        <span><b>First Name : </b>{item.first_name} </span>
                        <span><b>Last Name : </b>{item.last_name} </span>
                        <span><b>Year of Birth : </b>{item.yob} </span>
                        <span><b>City : </b>{item.city} </span>

                    </li>
                ))}
            </ol>
            <ListDetails employeeData={employee}/>
          </div>
        );
    }
}
export default List