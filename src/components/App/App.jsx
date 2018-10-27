import React, { Component} from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import Dropdown from '../Dropdown/dropdown.container';
import globalStyles from '../../../style/globals.less';
import appStyles from './App.less';

// Hacky workaround, should find another proper way of doing this
declare var module: any;

type State = {
  onClick: Function,
  menuItems: Array<any>
};

class App extends Component<null, State>{
  constructor(props) {
    super(props);
    this.state = {
      onClick: function() {},
      menuItems: []
    };
  }

  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <h2> Hello, World! </h2>
        <h3> Hello, World! </h3>
        <h4> Hello, World! </h4>
        <h5> Hello, World! </h5>
        <p> Hello, World! </p>
        <button className="custom-btn">Test</button>
        <div>
          <a className="custom-a" href="#">This is a link</a>
        </div>

        <Dropdown {...this.state}/>
      </div>
    );
  }
}


if (module.hot) {
  module.hot.accept();
}

export default hot(module)(connect()(App));
