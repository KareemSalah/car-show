import React, { Component } from 'react';
import Dropdown from '../Dropdown/dropdown.container';


type Props = {
  colors: Array<Object>,
  manufacturers: Array<Object>,
  onColorSelected: Function<Number>,
  onManufacturerSelected: Function<Number>,
  applyFilter: Function<void>
};

export default class FilterBoxView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className = "filter-box-container">
        <div className = "filter-box-dropdown">
          <label>Color</label>
          <Dropdown menuItems = {this.props.colors} onClick = {this.props.onColorSelected} keyid = "colors-dropdown"/>
        </div>

        <div className = "filter-box-dropdown">
          <label>Manufacturer</label>
          <Dropdown menuItems = {this.props.manufacturers} onClick = {this.props.onManufacturerSelected} keyid = "manus-dropdown"/>
        </div>

        <div className = "filter-box-buttom">
          <button className = "custom-btn" onClick = {this.props.applyFilters}>Filter</button>
        </div>
      </div>
    );
  }
}