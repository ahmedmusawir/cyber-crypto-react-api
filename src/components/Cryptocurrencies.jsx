import React from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();

  return <div>Cryptocurrencies</div>;
};

export default Cryptocurrencies;
