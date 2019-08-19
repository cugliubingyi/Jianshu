import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from "react-router-dom";
// import Header from './common/header';
import Home from './pages/home';
import Download from './pages/download';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import Writer from './pages/writer';
import store from './store';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
              {/*<Header/>*/}
              <Route path='/' exact component={Home}></Route>
              <Route path='/download' exact component={Download}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/writer' exact component={Writer}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
