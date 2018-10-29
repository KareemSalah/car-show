import React, { Component } from 'react';
import axios from '../../utils/axios.util';
import FilterBoxView from './FilterBox.view';
import styles from './FilterBox.style.less';


type Props = {};

type State = {
  colors: Array<string>,
  manufacturers: Array<string>,
  selectedColor: string,
  selectedManufacture: string
};

export default class FilterBox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      colors: [],
      manufacturers: [],
      defaultIndex: false,
      selectedColor: {},
      selectedManufacture: {}
    };
  }

  onColorSelected(colorIndex: Number) {
    this.setState({
      selectedColor: this.state.colors[colorIndex].value
    });
  }

  onManufacturerSelected(manufacturerIndex: Number) {
    this.setState({
      selectedManufacture: this.state.manufacturers[manufacturerIndex].value
    });
  }

  applyFilters() {

  }

  componentDidMount() {
    Promise.all([axios.get('/colors'), axios.get('/manufacturers')])
      .then((res) => {
        let colors = res[0].data.colors.reduce((prev, curr) => [...prev, {text: curr, value: curr}], []);
        let manufacturers = res[1].data.manufacturers.reduce((prev, curr) => [...prev, {text: curr.name, value: curr.name}], []);

        colors.splice(0, 0, { text: 'All car colors', value: undefined});
        manufacturers.splice(0, 0, { text: 'All manufacturers', value: undefined});

        this.setState({
          colors: colors,
          manufacturers: manufacturers
        });
      });
  }

  render() {
    return (
      <FilterBoxView
        colors = {this.state.colors}
        manufacturers = {this.state.manufacturers}
        onColorSelected = {this.onColorSelected.bind(this)}
        onManufacturerSelected = {this.onManufacturerSelected.bind(this)}
        applyFilters = {this.applyFilters}/>
    );
  }
}