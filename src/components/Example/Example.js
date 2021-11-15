import React from 'react';
import PropTypes from 'prop-types';

const Example = React.memo(({ value, ...others }) => <div {...others}>Example</div>);

Example.propTypes = {
  value: PropTypes.string,
};

export default Example;
