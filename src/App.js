import './App.scss';
import { useGetCryptosQuery } from './services/cryptoApi';

const App = () => {
  const { data, isFetching } = useGetCryptosQuery();

  console.log(data);

  return <div>Cyberize Crypto</div>;
};

export default App;
