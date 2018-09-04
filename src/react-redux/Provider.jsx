import React from 'react';

const {Provider, Consumer} = React.createContext({});

const ProviderComponent = ({ store, children }) => (
  <Provider value={ store }>
    { children }
  </Provider>
);

export default ProviderComponent;
export { Consumer };
