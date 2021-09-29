import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';
import './layouts/styles.css';


const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(<App/>, rootEl);
}


if(module.hot) {
  module.hot.accept('./layouts/App', () => {
    setTimeout(render);
  })
};

render();