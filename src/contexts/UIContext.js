import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const initialState = {
  mintingModalIsOpen: false,
  setMintingModalIsOpen: () => {},
};
const UIContext = createContext(initialState);

UIProvider.propTypes = {
  children: PropTypes.node,
};

function UIProvider({ children }) {
  const [mintingModalIsOpen, setMintingModalIsOpen] = useState(false);

  return <UIContext.Provider value={{ mintingModalIsOpen, setMintingModalIsOpen }}>{children}</UIContext.Provider>;
}

export { UIProvider, UIContext };
