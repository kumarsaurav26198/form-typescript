import React, { useState } from "react";
import firebases from "firebase/compat";
import fireDb from "../Firebase";


export interface Props {
  fullname: string;
  email: string;
  phone: string;
  password: string;


}
const initialvalue = {
  fullname: "",
  email: "",
  phone: "",
  password: "",
}

const Main = () => {
  const [ data, setData ] = useState<Props>(initialvalue);


  const handleOnchange = ( e: any ) => {
    const name = e.target.name;
    const vle = e.target.value;
    setData(pvalue =>({...pvalue,[name]:vle}))
  };

  const onSubmits = ( ) => {
    
    fireDb.child("form").push(data);

  };


  /* Firebase.  */
  ;


  return (
    <div>
      
      <form onSubmit={ onSubmits }>
        <div className="input-group">
          <span className="input-group-text">Full Name</span>
          <input
            type="text"
            name="fullname"
            aria-label="First name"
            className="form-control"
            value={ data.fullname }
            onChange={ handleOnchange }
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <br />
          <input
            type="email"
            name="email"
            value={ data.email }
            onChange={ handleOnchange }
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div><br />
        <label htmlFor="phone">Enter your phone number:</label>
        <br />
        <input type="number" name="phone" id="phone" className="input-group-prepend" value={ data.phone }
            onChange={ handleOnchange }
        
        /><br />
        <small id="emailHelp" className="form-text text-muted">
            We'll never share your phone with anyone else.
          </small>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleOnchange}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <br /> 
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Main;
