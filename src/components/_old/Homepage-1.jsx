import { useEffect, useState } from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Homepage = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  useEffect(() => {
    if (!isFetching) {
      setCryptos(cryptosList?.data?.coins);
    }
    console.log('Coins:', cryptos);
  }, []);

  return (
    <>
      <Title level={2}>Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value={'5'} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Exchanges' value={'5'} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Market Cap' value={'5'} />
        </Col>
        <Col span={12}>
          <Statistic title='Total 24h Volume' value={'5'} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Markets' value={'5'} />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
