import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeFilters } from '../../actions/index';
import HomePageView from './CarlList.view';
import * as _ from 'lodash';
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
  totalPages: Number
};

export class CarlList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      carList: [],
      filters: {
        page: 1
      },
      totalPages: 0
    };
  }

  componentDidMount() {
    axios.get('/cars')
      .then((res) => {
        this.setState({ carList: res.data.cars, totalPages: res.data.totalPageCount });
      });
  }

  componentWillUpdate(nextProps) {
    let options = {
      params: {
        color: this.state.filters.color,
        manufacturer: this.state.filters.manufacturer,
        page: this.state.filters.page || 1,
        sort: this.state.filters.sort
      }
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
          this.setState({ carList: res.data.cars, filters: options.params, totalPages: res.data.totalPageCount });
        });
    }
  }

  fetchPage(page) {
    if (page < 1 || page > this.state.totalPages) {
      return;
    }

    let newFilters = _.cloneDeep(this.state.filters);
    newFilters.page = page;
    this.props.changeFilters(newFilters);
  }

  first() {
    this.fetchPage(1);
  }

  last() {
    this.fetchPage(this.state.totalPages);
  }

  next() {
    this.fetchPage(this.state.filters.page + 1);
  }

  prev() {
    this.fetchPage(this.state.filters.page - 1);
  }

  render() {
    return (
      <CarListView
        listFilters = {this.props.listFilters}
        carList = {this.state.carList}
        totalPages = {this.state.totalPages}
        first = {this.first.bind(this)}
        last = {this.last.bind(this)}
        next = {this.next.bind(this)}
        prev = {this.prev.bind(this)}/>
    );
  }
}


function mapStateToProps(state) {
  return {
    listFilters: state.listFilters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeFilters
  }, dispatch);
}


export default connect(mapStateToProps,	mapDispatchToProps)(CarlList);