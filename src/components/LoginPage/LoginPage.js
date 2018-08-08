import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import PasswordField from "material-ui-password-field";
import {triggerLogin,formError,clearError} from "../../redux/actions/loginActions";
import "./LoginPageCss.css";

const mapStateToProps = state => ({
  user: state.user,
  login: state.login
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    this.props.dispatch(clearError());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      this.props.history.push("/welcome");
    }
  }

  login = event => {
    event.preventDefault();

    if (this.state.username === "" || this.state.password === "") {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(
        triggerLogin(this.state.username, this.state.password)
      );
    }
  };

  handleInputChangeFor = propertyName => event => {
    this.setState({
      [propertyName]: event.target.value
    });
  };

  renderAlert() {
    if (this.props.login.message !== "") {
      return (
        <h2 className="alert" role="alert">
          {this.props.login.message}
        </h2>
      );
    }
    return <span />;
  }

  render() {
    return (
      <div>
        <div className="title">
          <div className="title_padding">
            <h1>Hacker_feeds</h1>
          </div>
        </div>
        {this.renderAlert()}
        <form className="loginBox" onSubmit={this.login}>
          <h1>Login</h1>
          <div>
            <h2>Username:</h2>
            <TextField
              value={this.state.username}
              onChange={this.handleInputChangeFor("username")}
            />
          </div>
          <div>
            <h2>Password:</h2>
            <PasswordField
              value={this.state.password}
              onChange={this.handleInputChangeFor("password")}
              style={{ width: "210px" }}
            />
          </div>
          <div>
            <input type="submit" name="submit" value="Log In" />
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(mapStateToProps)(LoginPage);
