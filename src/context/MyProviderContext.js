/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProviderContext({ children }) {
  const [modal, setModal] = useState({
    open: false,
    id: '',
    name: 'Usuário',
  });

  const [message, setMessage] = useState({
    show: false,
    name: '',
    action: '',
  });

  const contextValue = {
    modal,
    setModal,
    message,
    setMessage,
  };

  return (
    <div>
      <MyContext.Provider value={contextValue}>
        { children }
      </MyContext.Provider>
    </div>
  );
}

MyProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProviderContext;
