import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div id="contact">
        <div className="heading14">Contact Us</div>
        <div className="heading15">TELE : 0123-456-789</div>
        <div className="heading16">themomsflavour7685@gmail.com </div>
        <div className="heading17">
          Wanna Connect? Leave a message & we will reach out to you!
        </div>

        <div className="cont3">
          <form>
            <div className="formname">Enter Your Name : </div>
            <div>
              <input type="text" className="formcontent2" placeholder="Name" />
            </div>
            <div className="formname">Enter Your Email : </div>
            <div>
              <input type="text" className="formcontent2" placeholder="Email" />
            </div>
            <div className="formname">Enter Your Message : </div>
            <div>
              <input
                type="text"
                id="formcontent3"
                className="formcontent2"
                placeholder="Message"
              />
            </div>
            <div>
              <button className="submitbttn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
