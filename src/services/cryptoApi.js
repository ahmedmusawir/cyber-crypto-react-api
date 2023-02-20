import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '7f4a47cd41msh94196ed5b449e80p161bf6jsnc0b28eef2ddd',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

const makeApiCall = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => makeApiCall(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => makeApiCall(`/coin/Qwsogvtv82FCd/exchanges`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => makeApiCall(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        makeApiCall(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetExchangesQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

// RAPID API CODE SNIPPET FOR THE COIN RANKING API (HTML FIVE DEV)

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
