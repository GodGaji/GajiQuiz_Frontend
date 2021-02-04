import React from 'react';
import styles from './Login.module.css';
import classNames from 'classnames/bind';
import LayoutContainer from '../../Components/Container/LayoutContainer';

const cx = classNames.bind(styles);

function Login() {
  return <div className={cx('App')}>login page</div>;
}

export default function login() {
  return (
    <LayoutContainer>
      <Login />
    </LayoutContainer>
  );
}
