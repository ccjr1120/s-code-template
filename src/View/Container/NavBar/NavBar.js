import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

const NavBar = React.memo(({ navList }) => (
  <div>
    <div
      css={css`
        height: ${112 / FONT_BASE}rem;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: space-around;
      `}
    >
      Logo
    </div>
    <div>
      {navList.map((item) => (
        <NavItem key={item.path} item={item} />
      ))}
    </div>
  </div>
));

NavBar.propTypes = {
  navList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      iconCode: PropTypes.string,
      path: PropTypes.string.isRequired,
      component: PropTypes.objectOf(PropTypes.any).isRequired,
      isDefault: PropTypes.bool,
    }),
  ),
};

export default NavBar;
