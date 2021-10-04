import React, { Component } from 'react'

const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForName = /^[a-zA-Z ]{2,100}$/;
const regForZip= /^\d{4}$|^\d{6}$/;
const regForUid=/^[1-9][0-9]{11}$/;
const regForPan=/^[A-Z]+[0-9A-Z]{9}/

class Application extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:null,
            mname:null,
            lname:null,
            ffname:null,
            fmname:null,
            flname:null,
            gender:null,
            email:null,
            c_email:null,
            password:null,
            c_password:null,
            uid:null,
            pan:null,
            address:null,
            address2:null,
            state:null,
            city:null,
            zip:null,

            errors:{
                fname:'',
                mname:'',
                lname:'',
                ffname:'',
                fmname:'',
                flname:'',
                gender:'',
                email:'',
                c_email:'',
                password:'',
                c_password:'',
                uid:'',
                pan:'',
                address:'',
                address2:'',
                state:'',
                city:'',
                zip:'',
            },
        }
    }
        handler=(event)=>{
            debugger;
            const {name,value}=event.target;
            let errors=this.state.errors;
            switch(name){
                case 'fname':
                    errors.fname=regForName.test(value)?'':'*First Name must be 6 Character long ';
                    break;
                case 'mname':
                    errors.mname=regForName.test(value)?'':'*Middle Name must be 6 Character long ';
                    break;
                case 'lname':
                    errors.lname=regForName.test(value)?'':'* Last Name must be 6 Character long ';
                    break;
                case 'ffname':
                    errors.ffname=regForName.test(value)?'':'* Father First Name must be 6 Character long ';
                    break;
                case 'fmname':
                    errors.fmname=regForName.test(value)?'':'* Father Middle Name must be 6 Character Long ';
                    break;
                case 'flname':
                    errors.flname=regForName.test(value)?'':'* Father Last Name must be 6 Character Long ';
                    break;
                case 'gender':
                    errors.gender=value===""?'Please select gender':'';
                    break;
                case 'email':
                    errors.email=regForEmail.test(value)?'':'* Email is not Valid! Please enter the valid email';
                    break;
                case 'c_email':
                    errors.c_email=this.state.email!==value?'* Email dose not Match':'';
                    break;
                case 'password':
                    errors.password=value.length<8?'* Password must me 8 chanrater long':'';
                    break;
                case 'c_password':
                    errors.c_password=this.state.password!==value? '* Password dose not match':'';
                    break;
                case 'uid':
                    errors.uid=regForUid.test(value)? '':'* Enter 12 Digit UID';
                    break;
                case 'pan':
                    errors.pan=regForPan.test(value)? '':'* Enter Valid PAN Number';
                    break;
                case 'address':
                    errors.address=regForName.test(value)?'':'* This field should not be empty';
                    break;
                case 'address2':
                    errors.address2=regForName.test(value)?'':'* This field should not be empty';
                break;
                case 'city':
                    errors.city=regForName.test(value)?'':'* This field should not be empty';
                break;
                case 'zip':
                    errors.zip=regForZip.test(value)?'':'* Enter Valid Zip Code';
                break;
            default:
                break;
                
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
        }
        formSubmit=(event)=>{
           event.preventDefault();
           //document.getElementById("myForm").reset();
           if(this.validate(this.state.errors))
           {
                console.log(this.state)
                
                alert('Application form submitted');
            }
            else {
               alert("Please Enter Valid Data");
            }
        }
        validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
            return valid;
        }
 
    render() {
        const {errors}=this.state;
        return (
            <div>
                <center>
                <div className="div-form row">
                    <h1 className="display-4 text-warning">Application Form</h1>
                    <form onSubmit={this.formSubmit} id="myForm" className="row g-3">
                        <div className="row g-3">
                            <div className="col">
                                <label className="form-label">First Name</label>
                                <input type="text" name="fname" className="form-control" placeholder="" aria-label="First name" onChange={this.handler} required />{errors.fname.length>0 && <span style={{color:'red', fontSize:'15px'}}>{errors.fname}</span>}<br/>
                            </div>
                            <div className="col">
                                <label className="form-label">Middle Name</label>
                                <input type="text" name="mname" className="form-control" placeholder="" aria-label="Last name" onChange={this.handler} required />{errors.mname.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.mname}</span>}<br/>
                            </div>
                            <div className="col">
                                <label className="form-label">Last Name</label>
                                <input type="text" name="lname" className="form-control" placeholder="" aria-label="Last name" onChange={this.handler} required />{errors.lname.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.lname}</span>}<br/>
                            </div>
                            
                        </div>
                        <div className="row g-3">
                            <div className="col">
                                <label className="form-label">Father First Name</label>
                                <input type="text" name="ffname" className="form-control" placeholder="" aria-label="First name" onChange={this.handler} required />{errors.flname.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.ffname}</span>}<br/>
                            </div>
                            <div className="col">
                                <label className="form-label">Father  Middle Name</label>
                                <input type="text" name="fmname" className="form-control" placeholder="" aria-label="Last name" onChange={this.handler} required />{errors.fmname.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.fmname}</span>}<br/>
                            </div>
                            <div className="col">
                                <label className="form-label">Father Last Name</label>
                                <input type="text" name="flname" className="form-control" placeholder="" aria-label="Last name" onChange={this.handler} required />{errors.flname.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.flname}</span>}<br/>
                            </div>
                        </div>
                        <div className="row g-3 check">
                            <label  className="form-label" name="gender" onChange={this.handler}>Gender</label>
                        
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="male"/>
                            <label className="form-check-label" >
                            Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="female"/>
                            <label className="form-check-label">
                            Female
                            </label>
                        </div>{errors.gender.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.gender}</span>}<br/>
                        </div>
                        <div className="col-md-5">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" id="email" onChange={this.handler}/>{errors.email.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.email}</span>}<br/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Confirm Email</label>
                            <input type="email" name="c_email" className="form-control" id="confirm_Email"onChange={this.handler}/>{errors.c_email.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.c_email}</span>}<br/>
                        </div>
                        <div className="col-md-5">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" id="password"onChange={this.handler}/>{errors.password.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.password}</span>}<br/>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" name="c_password" className="form-control" id="confirm_password"onChange={this.handler}/>{errors.c_password.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.c_password}</span>}<br/>
                        </div>
                        <div className="col-md-5">
                            <label className="form-label">UID Number</label>
                            <input type="number" name="uid" className="form-control num" id="uid" onChange={this.handler}/>{errors.uid.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.uid}</span>}<br/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">PAN Number</label>
                            <input type="text" name="pan" className="form-control" id="pan" onChange={this.handler}/>{errors.pan.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.pan}</span>}<br/>
                        </div>
                        <div className="col-5">
                            <label className="form-label">Address 1</label>
                            <textarea type="text" name="address" rows="7" className="form-control" id="inputAddress" placeholder="1234 Main St"  onChange={this.handler}/>{errors.address.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.address}</span>}<br/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Address 2</label>
                            <textarea type="text" name="address2" rows="7" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={this.handler}/>{errors.address2.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.address2}</span>}<br/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">City</label>
                            <input type="text" name="city" className="form-control" id="inputCity" onChange={this.handler}/>{errors.city.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.city}</span>}<br/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">State</label>
                            <select id="inputState" className="form-select">
                            <option value="Andhra Pradesh">Andhra Pradesh</option>   
                            <option value="Assam">Assam</option>   
                            <option value="Bihar">Bihar</option>   
                            <option value="Goa">Goa</option>   
                            <option value="Gujarat">Gujarat</option>   
                            <option value="Haryana">Haryana</option>   
                            <option value="Himachal Pradesh">Himachal Pradesh</option>   
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>   
                            <option value="Jharkhand">Jharkhand</option>   
                            <option value="Karnataka">Karnataka</option>   
                            <option value="Kerala">KeralaKerala</option>   
                            <option value="Madhya Pradesh">Madhya Pradesh</option>   
                            <option defaultValue value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>   
                            <option value="">None</option>
                        </select>
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Zip</label>
                            <input type="text" name="zip" className="form-control" id="inputZip" onChange={this.handler}/>{errors.zip.length>0 && <span style={{color:'red',fontSize:'15px'}}>{errors.zip}</span>}<br/>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                            <input className="form-check-input box" name="terms" type="checkbox" id="gridCheck" onChange={this.handler}/>
                            <label className="form-check-label">
                            Accept Terms and Conditions
                            </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div> 
                </center>
            </div>
        )
    }
}

export default Application
