import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link, useHistory, withRouter } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const { history, location } = useHistory();

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
      key: 'crypto',
      icon: <FundOutlined />,
      label: 'Cryptocurrencies',
      onClick: goCrypto,
    },
    {
      key: 'exchange',
      icon: <MoneyCollectOutlined />,
      label: 'Exchange',
      onClick: goExchange,
    },
    {
      key: 'news',
      icon: <BulbOutlined />,
      label: 'News',
      onClick: goNews,
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

      <Menu
        theme='dark'
        selectedKeys={[]}
        items={menuItems}
        selectable={true}
      />
    </div>
  );
};

export default Navbar;
