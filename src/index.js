import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layouts/App';
import './app/layouts/styles.css';
import 'semantic-ui-css/semantic.min.css'


const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(<App/>, rootEl);
}


if(module.hot) {
  module.hot.accept('./app/layouts/App', () => {
    setTimeout(render);
  })
};

render();