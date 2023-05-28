import React, { useState } from 'react'

export default function Signup() {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

  const handleSubmit = async (e) => {
  }

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <div className="signupbox">
        <div id="newhere">Hey! New here? &#128587;</div>
        <div id="signup">Sign up</div>
        <form onSubmit={handleSubmit}>
          <div><input type="text" className="formcontent" placeholder="Name" name='name' value={credentials.name} onChange={onChange} /></div>
          <div><input type="email" className="formcontent" placeholder="Email" name='email' value={credentials.email} onChange={onChange} /></div>
          <div><input type="password" className="formcontent" placeholder="Password" name='password' value={credentials.password} onChange={onChange} /></div>
          <div><input type="text" className="formcontent" placeholder="Address" name='geolocation' value={credentials.geolocation} onChange={onChange} /></div>
          <div><button type="submit" className="submitbtn">Submit</button></div>


        </form>
      </div>
      {/* <img src={chef} alt="" className="img1"></img> */}

    </div>
  )
}
