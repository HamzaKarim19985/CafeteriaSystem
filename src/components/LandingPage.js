import React, { Component } from "react";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }
  showLogin() {
    this.setState({
      isLoginOpen: true,
      isRegisterOpen: false
    });
  }
  showRegister() {
    this.setState({
      isLoginOpen: false,
      isRegisterOpen: true
    });
  }
  render() {
    return (
      <div class="container-fluid">
        <div class="root-container">
          <div class="box-controller">
            <div
              class={
                "controller " +
                (this.state.isLoginOpen ? "selected-controller" : "")
              }
              onClick={this.showLogin.bind(this)}
            >
              Login
            </div>
            <div
              class={
                "controller " +
                (this.state.isRegisterOpen ? "selected-controller" : "")
              }
              onClick={this.showRegister.bind(this)}
            >
              Register
            </div>
          </div>
          <div class="box-container">
            {this.state.isLoginOpen && <LoginBox />}
            {this.state.isRegisterOpen && <RegisterBox />}
          </div>
        </div>
      </div>
    );
  }
}
//Login Box
class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      userName: "",
      password: ""
    };
  }
  clearValidationErr(elm) {
    this.setState(prevState => {
      let newArr = [];

      for (let err of prevState.errors) {
        if (elm != err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }
  showValidationErr(elm, msg) {
    this.setState(prevState => ({
      errors: [...prevState.errors, { elm, msg }]
    }));
  }

  submitLogin(e) {
    if (this.state.userName == "") {
      this.showValidationErr("username", "User Name cannot be empty");
    }
    if (this.state.password == "") {
      this.showValidationErr("password", "Password cannot be empty");
    }
  }

  render() {
    let userErr = null,
      passwordErr = null;

    for (let e of this.state.errors) {
      if (e.elm == "username") {
        userErr = e.msg;
      } else if (e.elm == "password") {
        passwordErr = e.msg;
      }
    }
    return (
      <div className="inner-container">
        <div className="header">Login</div>
        <div className="box">
          <div className="input-group">
            <label class="form-label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              onChange={e => {
                this.setState({ userName: e.target.value });
                this.clearValidationErr("username");
              }}
            />
            {userErr && <small class="danger-error">{userErr}</small>}
          </div>

          <div className="input-group">
            <label class="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              onChange={e => {
                this.setState({ userName: e.target.value });
                this.clearValidationErr("password");
              }}
            />
            {passwordErr && <small class="danger-error">{passwordErr}</small>}
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitLogin.bind(this)}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
//Register Box
class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      userName: "",
      password: "",
      email: "",
      pswdState: null
    };
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");
    this.setState({ pswdState: "weak" });
    if (12 > e.target.value.length && e.target.value.length > 7) {
      this.setState({ pswdState: "medium" });
    } else if (e.target.value.length > 11) {
      this.setState({ pswdState: "strong" });
    }
  }

  submitRegister(e) {
    if (this.state.userName == "") {
      this.showValidationErr("username", "User Name cannot be empty");
    }
    if (this.state.password == "") {
      this.showValidationErr("password", "Password cannot be empty");
    }
    if (this.state.email == "") {
      this.showValidationErr("email", "Email cannot be empty");
    }
  }

  showValidationErr(elm, msg) {
    this.setState(prevState => ({
      errors: [...prevState.errors, { elm, msg }]
    }));
  }

  clearValidationErr(elm) {
    this.setState(prevState => {
      let newArr = [];

      for (let err of prevState.errors) {
        if (elm != err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  render() {
    /*Error variables setup to display later in return */
    let userErr = null,
      passwordErr = null,
      emailErr = null;
    for (let e of this.state.errors) {
      if (e.elm == "username") {
        userErr = e.msg;
      }
      if (e.elm == "password") {
        passwordErr = e.msg;
      }
      if (e.elm == "email") {
        emailErr = e.msg;
      }
    }
    /*password strenght state variables setup to display later in return(input password) */
    let pswdWeak = false,
      pswdMed = false,
      pswdStrong = false;
    if (this.state.pswdState == "weak") pswdWeak = true;
    else if (this.state.pswdState == "medium") pswdMed = true;
    else if (this.state.pswdState == "strong") pswdStrong = true;

    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div className="box">
          <div className="input-group">
            <label class="form-label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              onChange={e => {
                this.setState({ userName: e.target.value });
                this.clearValidationErr("username");
              }}
            />
            <small className="danger-error">{userErr ? userErr : ""}</small>
          </div>

          <div className="input-group">
            <label class="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"
              onChange={e => {
                this.setState({ email: e.target.value });
                this.clearValidationErr("email");
              }}
            />
            <small className="danger-error">{emailErr ? emailErr : ""}</small>
          </div>

          <div className="input-group">
            <label class="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
            <small className="danger-error">
              {passwordErr ? passwordErr : ""}
            </small>
            {this.state.password && (
              <div className="password-state">
                {pswdWeak && (
                  <div className={"pwd pwd-weak " + (pswdWeak ? "show" : "")}>
                    Weak
                  </div>
                )}
                {pswdMed && (
                  <div className={"pwd pwd-medium " + (pswdMed ? "show" : "")}>
                    Medium
                  </div>
                )}
                {pswdStrong && (
                  <div
                    className={"pwd pwd-strong " + (pswdStrong ? "show" : "")}
                  >
                    Strong
                  </div>
                )}
              </div>
            )}
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister.bind(this)}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
