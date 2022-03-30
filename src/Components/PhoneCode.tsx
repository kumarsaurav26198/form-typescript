import React from 'react';


export interface Props {
  fullname: string;
  email: string;
  phone:number;
  password: string;


}
const initialvalue = {
  fullname: "",
  email: "",
  phone: +91,
  password: "",
  
}

const onHandleChangeNumeric = (e: { target: { value: any; }; }) => {
    let valu = e.target.value;

    if (!Number(valu))
    {
        return;
    }

    // this.setState({ [e.target.name]: valu });
};


const PhoneCode = () => {
  return (
      <div>
            <input
                type="text"
                className="form-control"
                name="phone"
                aria-label="First name"
              onChange={ onHandleChangeNumeric }
              
            />
    </div>
  )
}

export default PhoneCode;



/*

import React from 'react';


const onHandleChangeNumeric = (e) => {
    let valu = e.target.value;

    if (!Number(valu))
    {
        return;
    }

    this.setState({ [e.target.name]: valu });
};

const PhoneCode = () => {
    return (
        <div>
            <input
                type="text"
                className="form-control"
                name="fullname"
                aria-label="First name"
                value={data.fullname}
                onChange={onHandleChangeNumeric}
            />
        </div>
    );
};

export default PhoneCode;


*/