import React from "react";


export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="signupbox">
        <div id="newhere">Hey! Nice to see you again &#128512;</div>
        <div id="login">Log In</div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              className="formcontent"
              placeholder="Email"
              name="email"
              value=""
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="password"
              className="formcontent"
              placeholder="Password"
              name="password"
              value=""
              onChange={onChange}
            />
          </div>
          <div>
            <button type="submit" className="submitbtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
