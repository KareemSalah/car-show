import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeFilters } from '../../actions/index';
import axios from '../../utils/axios.util';
import FilterBoxView from './FilterBox.view';
import styles from './FilterBox.style.less';


type Props = {};

type State = {
  colors: Array<string>,
  manufacturers: Array<string>,
  selectedColor: string,
  selectedManufacturer: string
};

export class FilterBox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      colors: [],
      manufacturers: [],
      defaultIndex: false,
      selectedColor: '',
      selectedManufacturer: ''
    };
  }

  onColorSelected(colorIndex: Number) {
    this.setState({
      selectedColor: this.state.colors[colorIndex].value
    });
  }

  onManufacturerSelected(manufacturerIndex: Number) {
    this.setState({
      selectedManufacturer: this.state.manufacturers[manufacturerIndex].value
    });
  }

  applyFilters() {
    let newFilters = {};

    if (this.state.selectedColor) {
      newFilters.color = this.state.selectedColor;
    }

    if (this.state.selectedManufacturer) {
      newFilters.manufacturer = this.state.selectedManufacturer;
    }

    this.props.changeFilters(newFilters);
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
        applyFilters = {this.applyFilters.bind(this)}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeFilters
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedColor: state.listFilters.color,
    manufacturer: state.listFilters.manufacturer
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBox);
