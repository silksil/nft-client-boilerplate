import { useContext } from 'react';
import { ContractContext } from '../contexts/ContractContext';

export const useWallet = () => {
  const { account, isConnected, connectionError, connect } = useContext(ContractContext);

  return { account, isConnected, error: connectionError, connect };
};
