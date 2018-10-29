import React, { Component } from 'react';
import HomePageView from './CarlList.view';
import FilterBox from '../FilterBox/FilterBox.container';
import CarListView from './CarlList.view';
import axios from '../../utils/axios.util';
import styles from './CarList.style.less';


type Props = {};

type State = {
  carList: Array<Object>
};

export default class CarlList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      carList: []
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <CarListView />
    );
  }
}