import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text, Title } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  // console.log('Exchange List for Bitcoin:', exchangesList);
  // console.log('Exchange Data for Bitcoin:', data);

  if (isFetching) return <Loader />;

  return (
    <>
      <Row style={{ marginTop: '2rem' }}>
        <Col span={8}>
          <Title className='exchange-title' level={4}>
            Exchanges
          </Title>
        </Col>
        <Col span={8}>
          <Title className='exchange-title' level={4}>
            24h Trade Volume
          </Title>
        </Col>
        <Col span={8}>
          <Title className='exchange-title' level={4}>
            Markets
          </Title>
        </Col>
      </Row>
      <Row>
        {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.uuid}>
                    <Col span={8}>
                      <Avatar
                        className='exchange-image'
                        src={exchange.iconUrl}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={8}>${millify(exchange['24hVolume'])}</Col>
                    <Col span={8} style={{ paddingLeft: '1rem' }}>
                      {millify(exchange.numberOfMarkets)}
                    </Col>
                  </Row>
                }
              >
                {/* {HTMLReactParser(exchange.description || '')} */}
                <Title level={5}>Ranking: {exchange.rank}</Title>
                <Title level={5}>
                  Details:{' '}
                  <a href={exchange.coinrankingUrl} target='_blank'>
                    {exchange.name} Coinranking Page
                  </a>
                </Title>
                <Title level={5}>Price to USD: {exchange.price}</Title>
                <Title level={5}>Price to BTC: {exchange.btcPrice}</Title>
                <Title level={5}>UUID: {exchange.uuid}</Title>
                {/* <Title level={5}>
                  Verified: {exchange.verified ? 'Yes' : 'No'}
                </Title> */}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
