import { css } from '@emotion/react';
import React from 'react';
import ExamplePage from '@/Pages/ExamplePage';

const Container = React.memo(() => {
  return (
    <div
      css={css`
        color: #fff;
        height: 100%;
        width: 100%;
        background: rgb(6, 12, 38);
      `}
    >
      <ExamplePage />
    </div>
  );
});

export default Container;
