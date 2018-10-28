import React, { Component } from 'react';
import { Link } from 'react-router-dom';
type Props = {};

export default class HeaderView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <nav className = "header-container">
        <div className = "logo-container">
          <Link to = "/">
            <img className = "header-logo" src = "assets/logo.png" alt = "auto1 logo"/>
          </Link>
        </div>

        <div className = "nav-menu-container">
          <ul className = "nav-menu-list">
            <li>
              <Link to = "/">
                <p className = "sub-title">
                  Purchase
                </p>
              </Link>
            </li>
            <li>
              <Link to = "/">
                <p className = "sub-title">
                  My Orders
                </p>
              </Link>
            </li>
            <li>
              <Link to = "/">
                <p className = "sub-title">
                  Sell
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}