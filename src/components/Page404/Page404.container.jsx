import React, { Component } from 'react';
import Page404View from './Page404.view';
import styles from './Page404.style.less';


type Props = {};

export default class Page404 extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Page404View />
    );
  }
}