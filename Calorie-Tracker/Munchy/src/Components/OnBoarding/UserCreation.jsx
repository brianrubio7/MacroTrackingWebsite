import "../../Styling/UserCreation.css";
import { useState } from "react";

const UserCreation = () => {
  return (
    <>
      <div className="wrapper5">
        <h2>Create your account</h2>
        <form className="type-login">
          <input type="email" placeholder="Enter your email"></input>
          <input type="password" placeholder="Enter your password"></input>
          <button>Continue</button>
        </form>
      </div>
    </>
  );
};

export default UserCreation;
