import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { css } from '@emotion/react';
import Icon from '@/components/Icon';

const NavItem = React.memo(({ item, ...others }) => (
  <NavLink
    style={({ isActive }) => ({
      display: 'flex',
      justifyContent: 'space-around',
      background: isActive ? '#002152' : 'rgba(0,0,0,0)',
      height: `${64 / FONT_BASE}rem`,
      textDecoration: 'none',
      color: '#fff',
      fontSize: `${20 / FONT_BASE}rem`,
      fontWeight: 'bold',
      letterSpacing: '0.1rem',
    })}
    {...others}
    to={item.path}
  >
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <Icon
        code={item.iconCode}
        css={css`
          width: ${22 / FONT_BASE}rem;
          height: ${20 / FONT_BASE}rem;
        `}
      />
      <span>{item.label}</span>
    </div>
  </NavLink>
));

NavItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    iconCode: PropTypes.string,
    path: PropTypes.string.isRequired,
    component: PropTypes.objectOf(PropTypes.any).isRequired,
    isDefault: PropTypes.bool,
  }),
};

export default NavItem;
