import React from 'react';
import styles from './Footer.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <div className={cx('App')}>
      <div className={cx('box')}>
        <div className={cx('item')}>footer</div>
        <div className={cx('item')}>footer</div>
        <div className={cx('item')}>footer</div>
      </div>
    </div>
  );
}
