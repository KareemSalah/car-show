import React, { Component } from 'react';
import DropdownView from './dropdown.view';


type Props = {
  onClick: Function,
  menuItems: Array<any>
};

export default class Dropdown extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <DropdownView {...this.props}/>
    );
  }
}