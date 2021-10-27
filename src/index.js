import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/layouts/App';
import './app/layouts/styles.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './app/store/configureStore';
import ScrollToTop from './app/layouts/ScrollToTop';

const store = configureStore();

const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop/>
        <App/>
      </BrowserRouter>
    </Provider>, 
  rootEl);
}


if(module.hot) {
  module.hot.accept('./app/layouts/App', () => {
    setTimeout(render);
  })
};

render();