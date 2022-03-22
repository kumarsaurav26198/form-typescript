import React, { useState } from "react";
// import firebases from "firebase/compat";
import fireDb from "../Firebase";
import "firebase/compat/database";

const Main = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>({});
  const [name, setName] = useState<string>();

  const userName = (e:string) => {
    setName(name);
  };

  const handleOnchangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  
  const handleOnchangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const user = () => {
    fireDb.child("form").push(email+password+userName);
  };
  return (
    <div>
      <form>
        <div className="input-group">
          <span className="input-group-text">First and last name</span>
          <input
            type="text"
            aria-label="First name"
            className="form-control"
            value={name}
            // onChange={userName}
          />
        </div>
        <br /> 
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <br />
          <input
            type="email"
            onChange={handleOnchangeEmail}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <label htmlFor="phone">Enter your phone number:</label>
        <br />
        <input type="tel" id="phone" className="form-text" name="phone"></input>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            onChange={handleOnchangePassword}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary" onClick={user}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Main;
