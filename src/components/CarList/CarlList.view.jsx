import React, { Component } from 'react';
import FilterBox from '../FilterBox/FilterBox.container';
import styles from './CarList.style.less';


type Props = {
  carList: Array<Object>
};

export default class CarlListView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className = "car-list-container">
        <div className = "filter-box-wrapper">
          <FilterBox key = "car-filter-box"/>
        </div>
        <div className = "car-list-wrapper">
          {/* <FilterBox key = "something-else"/> */}
        </div>
      </div>
    );
  }
}