import React from 'react';
import Container from './Container';
import Styles from './Styles';

const View = React.memo(() => (
  <>
    <Styles />
    <Container />
  </>
));

export default View;
