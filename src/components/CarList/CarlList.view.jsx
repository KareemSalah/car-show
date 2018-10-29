import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/dropdown.container';
import FilterBox from '../FilterBox/FilterBox.container';
import styles from './CarList.style.less';


type Props = {
  carList: Array<Object>,
  listFilters: string,
  totalPages: Number,
  first: Function,
  last: Function,
  prev: Function,
  next: Function
};

export default class CarlListView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  renderCarList() {
    let ret = [];
    this.props.carList.forEach((car, idx) => {
      ret.push(
        <div className = "car-card" key = {idx}>
          <div className = "car-card-img">
            <img src = {car.pictureUrl} alt="car image"/>
          </div>
        <div className = "car-card-details">
          <h3>
            {car.manufacturerName} - {car.modelName}
          </h3>
          <p>Stock # {car.stockNumber} - {car.mileage.number} {car.mileage.unit} - {car.fuelType} - {car.color}</p>
          <Link to = {`/car/${car.stockNumber}`}>View details</Link>
        </div>
        </div>
      );
    });
    return ret;
  }

  render() {
    return (
      <div className = "car-list-wrapper">
        <div className = "car-list-container">
          <div className = "filter-box-wrapper">
            <FilterBox key = "car-filter-box"/>
          </div>
          <div className = "car-list-wrapper">
            <div className = "car-list-header">
              <div className = "list-numbers">
                <h2>Available Cars</h2>
                <p className = "sub-title">Showing {Math.min(this.props.carList.length, 10)} of 100 results</p>
              </div>
              <div className = "list-sort-container">
                <label>Sort by</label>
                <Dropdown menuItems = {this.props.sortOptions} onClick = {this.props.onSortChange.bind(this)}/>
              </div>
            </div>
            {this.renderCarList()}
            <div className = "car-list-pagination">
              <a href = "#" onClick = {this.props.first}>First</a>
              <a href = "#" onClick = {this.props.prev}>Previous</a>
              <p>Page {this.props.listFilters.page} of {this.props.totalPages}</p>
              <a href = "#" onClick = {this.props.next}>Next</a>
              <a href = "#" onClick = {this.props.last}>Last</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}