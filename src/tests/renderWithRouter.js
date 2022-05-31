/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import MyProviderContext from '../context/MyProviderContext';
// const history = createMemoryHistory({ initialEntries: ['/mina'] });

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <MyProviderContext>
        <Router location={history.location} navigator={history}>
          { component }
        </Router>
      </MyProviderContext>,
    ),
    history,
  });
};

export default renderWithRouter;
