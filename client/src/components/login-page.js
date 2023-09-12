import React, { Component } from 'react';
import './login-page.css';

class Loginpage extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      isSignUpMode: false,
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      newPassword: '',
      confirmPassword: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    // You can add authentication logic here
    // For simplicity, we'll just pretend it's successful
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      isSignUpMode: false,
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  handleToggleMode = () => {
    this.setState((prevState) => ({
      isSignUpMode: !prevState.isSignUpMode,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.isSignUpMode) {
      // Handle sign up
      // You can add your sign-up logic here
    } else {
      // Handle sign in
      // You can add your sign-in logic here
      this.handleLogin();
    }
  };

  render() {
    return (
      <div className={`Loginpage ${this.state.isLoggedIn ? 'loggedIn' : ''}`}>
        <div className="login-container">
          {this.state.isLoggedIn ? (
            <div className="logged-in">
              <h2>Welcome, User!</h2>
              <button onClick={this.handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="login-form">
              <h2>{this.state.isSignUpMode ? 'Sign Up' : 'Sign In'}</h2>
              <form onSubmit={this.handleSubmit}>
                {!this.state.isSignUpMode && (
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                )}
                {!this.state.isSignUpMode && (
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                )}
                {this.state.isSignUpMode && (
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                )}
                {this.state.isSignUpMode && (
                  <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                )}
                {this.state.isSignUpMode && (
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                )}
                {this.state.isSignUpMode && (
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                )}
                {this.state.isSignUpMode && (
                  <div className="form-group">
                    <label htmlFor="newPassword">New Password:</label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={this.state.newPassword}
                      onChange={this.handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                )}
                {this.state.isSignUpMode && (
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                )}
                <button type="submit" className="login-button">
                  {this.state.isSignUpMode ? 'Sign Up' : 'Sign In'}
                </button>
                <div className="alt-login-options mt-6">
                  <hr className="alt-login-divider" />
                  <p>Or continue with:</p>
                  <a
                    href="https://accounts.google.com/login"
                    className="alt-login-button google"
                  >
                    Continue with Google
                  </a>
                  <a
                    href="https://www.facebook.com/login" // Replace with actual Facebook login URL
                    className="alt-login-button facebook"
                  >
                    Continue with Facebook
                  </a>
                  <a
                    href="https://www.apple.com/sign-in" // Replace with actual Apple login URL
                    className="alt-login-button apple"
                  >
                    Continue with Apple
                  </a>
                  <a
                    href="https://www.example.com/mobile-login" // Replace with actual mobile login URL
                    className="alt-login-button mobile"
                  >
                    Continue with Mobile Number
                  </a>
                </div>
                <button
                  type="button"
                  className="toggle-mode-button"
                  onClick={this.handleToggleMode}
                >
                  {this.state.isSignUpMode ? 'Sign In Instead' : 'Sign Up Instead'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Loginpage;
