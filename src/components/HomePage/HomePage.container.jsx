import React, { Component } from 'react';
import HomePageView from './HomePage.view';
import styles from './HomePage.style.less';


type Props = {};

export default class HomePage extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomePageView />
    );
  }
}