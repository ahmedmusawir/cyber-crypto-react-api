import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };
  const goNews = () => {
    history.push('/news');
  };
  const goCrypto = () => {
    history.push('/Cryptocurrencies');
  };
  const goExchange = () => {
    history.push('/exchanges');
  };
  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Home',
      onClick: goHome,
    },
    {
      key: 'news',
      icon: <BulbOutlined />,
      label: 'News',
      onClick: goNews,
    },
    {
      key: 'crypto',
      icon: <BulbOutlined />,
      label: 'Cryptocurrencies',
      onClick: goCrypto,
    },
    {
      key: 'exchange',
      icon: <BulbOutlined />,
      label: 'Exchange',
      onClick: goExchange,
    },
  ];

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title
          level={2}
          style={{ paddingTop: '1rem', paddingLeft: '.5rem' }}
        >
          <Link to='/'>Cyberize Crypto</Link>
        </Typography.Title>
      </div>

      <Menu selectedKeys={[]} items={menuItems} />

      {/* <Menu theme='dark'> */}
      {/* <Menu.Item>
          <Link to='/'>Home</Link>
        </Menu.Item> */}
      {/* <Menu.Item icon={<HomeOutlined />} key={1}>
          <Link to='/'>Home</Link>
        </Menu.Item> */}
      {/* <Menu.Item icon={<FundOutlined />}>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to='/exchanges'>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to='/news'>News</Link>
        </Menu.Item> */}
      {/* </Menu> */}
    </div>
  );
};

export default Navbar;
