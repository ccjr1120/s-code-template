import { css } from '@emotion/react';
import React from 'react';
import {
  Outlet, BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import pages from '@/Page/pages';
import NavBar from './NavBar';

const Container = React.memo(() => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={(
          <div
            css={css`
              height: 100%;
              width: 100%;
              overflow: hidden;
              display: grid;
              grid-template-columns: ${200 / FONT_BASE}rem calc(100% - ${200 / FONT_BASE}rem);
            `}
          >
            <div
              css={css`
                background: rgba(0, 0, 0, 0.95);
              `}
            >
              <NavBar navList={pages} />
            </div>
            <main>
              <Outlet />
            </main>
          </div>
        )}
      >
        <Route
          path="/"
          element={<Navigate replace to={pages.filter((item) => item.isDefault)[0].path || '/'} />}
        />
        {pages.map((item) => (
          <Route key={item.path} path={item.path} element={React.createElement(item.component)} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
));

export default Container;
