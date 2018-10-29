import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FilterBox from '../FilterBox/FilterBox.container';
import styles from './CarList.style.less';


type Props = {
  carList: Array<Object>,
  listFilters: string
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
      <div className = "car-list-container">
        <div className = "filter-box-wrapper">
          <FilterBox key = "car-filter-box"/>
        </div>
        <div className = "car-list-wrapper">
          <div className = "car-list-header">
            <h2>Available Cars</h2>
            <p className = "sub-title">Showing {Math.min(this.props.carList.length, 10)} of 100 results</p>
          </div>
          {this.renderCarList()}
        </div>
      </div>
    );
  }
}