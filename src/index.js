import { css } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import View from './View';

const rootNode = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <View />
  </React.StrictMode>,
  rootNode
);
