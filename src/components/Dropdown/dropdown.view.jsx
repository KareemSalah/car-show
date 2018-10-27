import React, { Component } from 'react';
import styles from './dropdown.style.less';


type Props = {
  onClick: Function,
  menuItems: Array<any>
};

export default class DropdownView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <p>Dropdown</p>
    );
  }
}