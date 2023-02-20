import { useState, useEffect } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment/moment';
import cryptoData from '../app/crypto-data.json';
import { bitcoin, ethereum, tetherUSD } from '../app/coins-news';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const count = simplified ? 6 : 12;
  const [cryptoNews, setCryptoNews] = useState(bitcoin);
  const [newsCategory, setNewsCategory] = useState('');

  // console.log('News Data:', ethereum);
  // console.log('Crypto Data:', cryptoData);

  useEffect(() => {
    console.log('Cats:', newsCategory);
    if (newsCategory === 'Ethereum') {
      setCryptoNews(ethereum);
    } else if (newsCategory === 'Tether USD') {
      setCryptoNews(tetherUSD);
    } else {
      setCryptoNews(bitcoin);
    }
  }, [newsCategory]);

  // Cutting short Crypto Data
  const cryptoCoins = cryptoData.data.coins.slice(0, 3);

  // Cutting short the number of news items according to count
  let news;

  if (count === 6) {
    news = cryptoNews.articles.slice(0, 6);
  } else {
    news = cryptoNews.articles;
  }

  return (
    <Row gutter={[24, 24]} style={{ marginTop: '2rem' }}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder='Select a Crypto'
            optionFilterProp='children'
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {/* <Option value='Cryptocurrency'>Cryptocurrency</Option> */}
            {cryptoCoins.map((coin) => (
              <Option key={coin.uuid} value={coin.name}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}

      {news?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel={'noreferrer'}>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>
                  {news.title}
                </Title>
                <small>{news.subject}</small>
              </div>
              <p>
                {news?.text.length > 50
                  ? `${news?.text.substring(0, 300)}...`
                  : news?.text}
              </p>
              <div className='provider-container' style={{ marginTop: '3rem' }}>
                <div>
                  <Avatar src={news?.avatar} alt='news' />
                  <Text className='provider-name'>{news?.source}</Text>
                </div>
                <Text>{moment(news?.date).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
