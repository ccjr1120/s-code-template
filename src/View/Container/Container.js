import { css } from '@emotion/react';
import React from 'react';
import useToggle from '@/hooks/useToggle';
import Context from './Context';
import NavBar from './NavBar';

const Container = React.memo(() => {
  const [visible, setVisible] = useToggle(true);

  return (
    <Context.Provider value={{ state: { visible }, dispatch: { setVisible } }}>
      <NavBar />
      <main
        css={css`
          height: 100%;
          margin-left: ${visible
          ? ` ${240 / FONT_BASE}rem`
          : `${40 / FONT_BASE}rem`};
          padding: ${16 / FONT_BASE}rem;
          border: 1px solid rgba(0, 0, 0, 0.2);
          transition: 1s;
        `}
      />
    </Context.Provider>
  );
});

export default Container;
