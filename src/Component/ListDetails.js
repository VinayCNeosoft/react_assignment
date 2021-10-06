import React from 'react'
import { Component } from 'react';

class ListDetails extends Component{
  render() {
    const { employeeData } = this.props;

    return (
      <div>
        <center>
        <h1 className="display-5 l-head"> * 20 Employee Detail in Table * </h1>
        <table className="table">
            <thead>
                <tr key = {'inr'}>
                    <th>Employee Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>YOB</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
            {employeeData.map((data, index) => {
            return (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.yob}</td>
                  <td>{data.city}</td>
                </tr>
            );
          })}
          </tbody>
        </table>
        </center>
      </div>
    );
  }
}
export default ListDetails