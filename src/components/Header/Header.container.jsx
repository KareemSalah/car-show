import React, { Component } from 'react';
import HeaderView from './Header.view';
import styles from './Header.style.less';


type Props = {

};

export default class Header extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <HeaderView />
    );
  }
}