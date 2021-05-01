import React from "react";
import FormInput from "../FormInput/FormInput";
import CustomButtom from "../CustomButton/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./styles.scss";

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmpPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, password, email, confirmpPassword } = this.state;

    if (password !== confirmpPassword) {
      alert("Passwords Dont Match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmpPassword: "",
      });
    } catch (error) {
      console.log("Error ", error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmpPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmpPassword"
            value={confirmpPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButtom type="submit">SIGN UP</CustomButtom>
        </form>
      </div>
    );
  }
}
