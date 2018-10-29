import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

export default class Page404View extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className = "page-404-container">
        <div className = "page-404-logo-container">
          <img className = "page-404-logo" src="/assets/logo.png" alt="auto1 logo"/>
        </div>
        <div>
          <h1 className = "title">
            404 - Not Found
          </h1>
        </div>
        <div>
          <p className = "sub-title">Sorry, the page you are looking for does not exist.</p>
          <p className = "sub-title">You can always go back to the <span><Link to = "/" >homepage.</Link></span></p>
        </div>
      </div>
    );
  }
}