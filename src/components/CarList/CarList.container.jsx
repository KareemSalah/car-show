import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePageView from './CarlList.view';
import FilterBox from '../FilterBox/FilterBox.container';
import CarListView from './CarlList.view';
import axios from '../../utils/axios.util';
import styles from './CarList.style.less';


type Props = {
  listFilters: Object
};

type State = {
  carList: Array<Object>,
  filters: Object,
  listFilters: Object
};

export class CarlList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      carList: [],
      filters: {}
    };
  }

  componentDidMount() {
    axios.get('/cars')
      .then((res) => {
        this.setState({ carList: res.data.cars });
      });
  }

  componentWillUpdate(nextProps) {
    let options = {
      params: {}
    };
    let update = false;

    if (nextProps.listFilters.color !== this.state.filters.color) {
      options.params.color = nextProps.listFilters.color;
      update = true;
    }
    if (nextProps.listFilters.manufacturer !== this.state.filters.manufacturer) {
      options.params.manufacturer = nextProps.listFilters.manufacturer;
      update = true;
    }
    if (nextProps.listFilters.page !== this.state.filters.page) {
      options.params.page = nextProps.listFilters.page;
      update = true;
    }
    if (nextProps.listFilters.sort !== this.state.filters.sort) {
      options.params.sort = nextProps.listFilters.sort;
      update = true;
    }

    if (update) {
      axios.get('/cars', options)
        .then((res) => {
          this.setState({ carList: res.data.cars, filters: options.params });
        });
    }
  }

  render() {
    return (
      <CarListView listFilters = {this.props.listFilters} carList = {this.state.carList}/>
    );
  }
}


function mapStateToProps(state) {
  return {
    listFilters: state.listFilters
  };
}

export default connect(mapStateToProps,	null)(CarlList);