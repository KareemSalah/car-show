import React, { Component } from 'react';
import CarList from '../CarList/CarList.container';


type Props = {};

export default class HomePageView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className = "main-content-container">
        <CarList />
      </div>
    );
  }
}