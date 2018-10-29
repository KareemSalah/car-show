import React, { Component } from 'react';


type Props = {};

export default class HomePageView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className = "main-content-container">
        <h1>Hi</h1>
      </div>
    );
  }
}