import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div>
        <h3> Now, For FREE "7 Steps to Success Story"</h3>
        <h4> Get a FREE and EXCLUSIVE Overview of our Program Right Now!</h4>
        <p></p>
      </div>
      <form>
        <div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="text" placeholder="Email Address" />

        <button type="submit">Recieve Gift!</button>
      </form>
    </div>
  );
};

export default NewsLetter;
