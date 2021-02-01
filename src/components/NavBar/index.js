import React from 'react';
import styles from './NavBar.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function NavBar() {
  return (
    <div className={cx('App')}>
      <div>Logo</div>
    </div>
  );
}
