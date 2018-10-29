import React, { Component} from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Dropdown from '../Dropdown/dropdown.container';
import Header from '../Header/Header.container';
import Footer from '../Footer/Footer.container';
import HomePage from '../HomePage/HomePage.container';
import Page404 from '../Page404/Page404.container';
import globalStyles from '../../../style/globals.less';

// Hacky workaround, should find another proper way of doing this
declare var module: any;

class App extends Component<null, null>{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path = "/" component = {HomePage}/>
          <Route component = {Page404}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}


if (module.hot) {
  module.hot.accept();
}

export default hot(module)(connect()(App));
