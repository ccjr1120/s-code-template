import { css } from '@emotion/react';
import React from 'react';

const View = React.memo(() => (
  <div
    css={css`
      color: #999;
    `}
  >
    view
  </div>
));

export default View;
