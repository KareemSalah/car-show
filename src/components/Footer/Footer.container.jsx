import React, { Component } from 'react';
import FooterView from './Footer.view';
import styles from './Footer.style.less';


type Props = {};

export default class Footer extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <FooterView />
    );
  }
}