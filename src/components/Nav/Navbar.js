import React, { Component } from "react";
import "./Navbar.scss";
import Login from "../../pages/Sign/Login/Login";
import Signup from "../../pages/Sign/Signup/Signup";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  state = {
    isLoginModalOn: false,
    isSignupModalOn: false,
  };

  handleActive = () => {
    this.setState({
      isLoginModalOn: false,
      isSignupModalOn: false,
    });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
    alert("로그아웃되었습니다.");
  };

  render() {
    return (
      <>
        <nav className="nav letter">
          <div className="navMenu">
            <div className="brandName">
              <Link to="/">MANNAMCHU</Link>
            </div>
            <div className="mainMenu">
              <ul>
                <li>
                  <Link to="/product">Market</Link>
                </li>
                <li>
                  <Link to="/">New</Link>
                </li>{" "}
                <li>
                  <Link to="/">Best</Link>
                </li>
                <li>
                  <Link to="/">Sale</Link>
                </li>
              </ul>
            </div>
            <div className="asideMenu">
              <ul>
                {localStorage.getItem("token") ? (
                  <li onClick={this.handleLogout}>Logout</li>
                ) : (
                  <li onClick={() => this.setState({ isLoginModalOn: true })}>
                    Login
                  </li>
                )}
                <li onClick={() => this.setState({ isSignupModalOn: true })}>
                  Join
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.state.isLoginModalOn && (
          <Login handleActive={this.handleActive} />
        )}
        {this.state.isSignupModalOn && (
          <Signup handleActive={this.handleActive} />
        )}
      </>
    );
  }
}

export default withRouter(Navbar);
