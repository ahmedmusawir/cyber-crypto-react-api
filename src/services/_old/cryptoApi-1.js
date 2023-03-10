import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '7f4a47cd41msh94196ed5b449e80p161bf6jsnc0b28eef2ddd',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

const cryptoApiParams = {
  referenceCurrencyUuid: 'yhjMzLPhuIDl',
  timePeriod: '24h',
  'tiers[0]': '1',
  orderBy: 'marketCap',
  orderDirection: 'desc',
  limit: '50',
  offset: '0',
};

const makeApiCall = (url) => ({
  url,
  headers: cryptoApiHeaders,
  params: cryptoApiParams,
});

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => makeApiCall('/coins'),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0',
//   },
//   headers: {
//     'X-RapidAPI-Key': '7f4a47cd41msh94196ed5b449e80p161bf6jsnc0b28eef2ddd',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//   },
// };
