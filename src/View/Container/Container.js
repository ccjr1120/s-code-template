import { css } from '@emotion/react';
import React from 'react';
import Hello from '@/Page/Hello';

const Container = React.memo(() => (
  <main
    css={css`
      height: calc(100% - ${16 / FONT_BASE}rem);
      margin: ${8 / FONT_BASE}rem ${12 / FONT_BASE}rem;
      border: 1px solid rgba(0, 0, 0, 0.2);
      transition: 1s;
    `}
  >
    <Hello />
  </main>
));

export default Container;
