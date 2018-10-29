import React, { Component } from 'react';


type Props = {};

export default class FooterView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className = "footer-container">
        <p>© AUTO1 Group 2018</p>
      </div>
    );
  }
}