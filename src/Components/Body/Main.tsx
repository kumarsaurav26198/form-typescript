import { useState } from "react";
import fireDb from "../Firebase";
import PhoneCode from "../PhoneCode";
import "./Main.css";
// import axios from "axios"


export interface Props {
  fullname: string;
  email: string;
  phone:number;
  password: string;
}
const initialvalue = {
  fullname: "",
  email: "",
  phone: 91,
  password: "",
  
}

const Main = () => {
  const [ data, setData ] = useState<Props>(initialvalue);


  
  const handleOnchange = ( e: any ) => {


    const name = e.target.name;
    const vle = e.target.value;
    

    setData( pvalue => ( { ...pvalue, [ name ]: vle } ) )
     
    
  };

//   const onSubmits = () => {
//     return (
//     fetch<creatw>( "mongodb+srv://root:appleapple@cluster0.riddj.mongodb.net/form?retryWrites=true&w=majority", {
//       method: "POST",
//       data: JSON.stringify( data ),
//       headers: { "Content-": "application/json" },
//     } )
//     .then(res => res.json())
//     .then(data => console.log(data)); 
//      )
  
  /* Firebase.  */
  const onSubmits = ( e: any ) => { 
    e.preventDefault();
    fireDb.child( "form" ).push( data );
    console.log( data );
  }

  // const onSubmits = ( e: any ) => {
  //   fireDb.child( "form" ).push( data );
    
  // e.preventDefault();
  //   const fullname = e.target.fullname.value;
  //   const email = e.target.email.value;
  //   const phone = e.target.phone.value;
  //   const password = e.target.password.value;

  //   axios.post( "https://623dc3bedb0fc039d4bc0df3.mockapi.io/persons" )
  //     .then( ( response ) => {
  //       console.log( response );
  //       e.target.reset()
  //     } )
  //   .catch( ( error ) => {console.log( error );})

    
    // console.log( data );
  // };

  

  ;


  return (
    <div>
      
      <form onSubmit={onSubmits}>
        <div className="input-group">
          <span className="input-group-text">Full Name</span>
          <input
            type="text"
            name="fullname"
            aria-label="First name"
            className="form-control"
            value={ data.fullname }
            onChange={ handleOnchange  }
            
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          {/* <PhoneCode/> */}
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
        <input type="text" name="phone" id="phone" className="input-group-prepend"        
          value={ data.phone }
          onChange={ handleOnchange} /><br />
        
        <small id="emailHelp" className="form-text text-muted">
            We'll never share your phone with anyone else.
          </small>
        <br />
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Describe here</label>
          <textarea
            // type="text"
            name="password"
            value={data.password}
            onChange={handleOnchange}
            className="form-control textareaInputField"
            id="exampleInputPassword1"
            placeholder="Why you want to contact to me "
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

