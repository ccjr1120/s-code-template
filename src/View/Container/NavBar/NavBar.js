import { css } from '@emotion/react';
import React from 'react';
import useStore from '../useStore';
import NavToggleBtn from './NavToggleBtn';

const NavBar = React.memo(({ ...others }) => {
  const { state } = useStore();
  return (
    <div
      css={css`
        height: 100%;
        width: ${240 / FONT_BASE}rem;
        position: fixed;
        top: 0;
        left: ${state.visible ? 0 : `-${200 / FONT_BASE}rem`};
        transition: 1s;
        display: grid;
        grid-template-columns: ${200 / FONT_BASE}rem ${40 / FONT_BASE}rem; ;
      `}
      {...others}
    >
      <div
        css={css`
          height: 100%;
          border-right: 1px solid rgba(0, 0, 0, 0.2);
        `}
      />
      <NavToggleBtn
        css={css`
          margin-left: ${6 / FONT_BASE}rem;
        `}
      />
    </div>
  );
});

NavBar.propTypes = {};

export default NavBar;
