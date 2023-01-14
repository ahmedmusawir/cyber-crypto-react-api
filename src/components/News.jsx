import { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment/moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;
const demoImageUrl =
  'https://www.bing.com/th?id=OVFT.8WVfgzWYndEEhJMaQzNmMC&pid=News';

const News = ({ simplified }) => {
  const count = simplified ? 6 : 12;
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory: 'Cryptocurrency',
    count,
  });
  // console.log('News Data:', cryptoNews);

  if (isFetching) return 'Loading ...';

  return (
    <div>
      <Row gutter={[32, 32]}>
        {cryptoNews?.value?.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href={news.url} target='_blank' rel={'noreferrer'}>
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>
                    {news.name}
                  </Title>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || demoImageUrl}
                    alt=''
                  />
                </div>
                <p>
                  {news.description.length > 50
                    ? `${news.description.substring(0, 150)}...`
                    : news.description}
                </p>
                <div className='provider-container'>
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImageUrl
                      }
                      alt='news'
                    />
                    <Text style={{ paddingLeft: '.5rem' }}>
                      {moment(news?.datePublished).startOf('ss').fromNow()}
                    </Text>
                  </div>
                </div>
              </a>
            </Card>
            {/* <p>{news?.image?.thumbnail?.contentUrl}</p> */}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;
