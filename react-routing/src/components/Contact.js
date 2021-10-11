import React from "react";
import "../Contact.css";

function Contact() {
  return (
    <div className="bd">
      <h4>How to contact Us</h4>
      <div className="container">
        <form>
          <label for="fname">First Name</label>
          <input
            type="text"
            className="fname"
            name="firstname"
            placeholder="Your name..."
          />

          <lable for="lname">Last Name</lable>
          <input
            type="text"
            className="lname"
            name="lastname"
            placeholder="Your last name..."
          />

          <lable for="country">Country</lable>
          <select className="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label for="subject">Subject</label>
          <textarea
            className="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
