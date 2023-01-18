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
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 801) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

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
          <Link to='/'>Cyber Crypto</Link>
        </Typography.Title>
        <Button
          className='menu-control-container'
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>

      {activeMenu && (
        <Menu
          theme='dark'
          items={menuItems}
          onClick={({ key }) => {
            history.push(key);
          }}
        />
      )}
    </div>
  );
};

export default Navbar;
