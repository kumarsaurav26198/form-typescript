import React from 'react'

const Create = () => {
  return (
      <div>
          <form >
              <div className="input-group">
                  <span className="input-group-text">Full Name</span>
                  <input
                    type="text"
                    name="fullname"
                    aria-label="First name"
                    className="form-control"       
                   />
              </div>
          </form>
    </div>
  )
}

export default Create