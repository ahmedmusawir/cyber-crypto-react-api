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

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: '/cryptocurrencies',
      icon: <FundOutlined />,
      label: 'Cryptocurrencies',
    },
    {
      key: '/exchanges',
      icon: <MoneyCollectOutlined />,
      label: 'Exchange',
    },
    {
      key: '/news',
      icon: <BulbOutlined />,
      label: 'News',
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
        items={menuItems}
        onClick={({ key }) => {
          history.push(key);
        }}
      />
    </div>
  );
};

export default Navbar;
