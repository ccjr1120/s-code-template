import React from 'react';
import useStore from '../useStore';

const NavToggleBtn = React.memo(({ ...others }) => {
  const { dispatch } = useStore();
  return <div onClick={dispatch.setVisible} {...others}>btn</div>;
});

NavToggleBtn.propTypes = {};

export default NavToggleBtn;
