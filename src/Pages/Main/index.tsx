import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import classNames from 'classnames/bind';
import LayoutContainer from '../../Components/Container/LayoutContainer';
import Button from '../../Components/Button';
import logo from '../../Images/godgaji_img/logo_symbol.svg';
import logo_text from '../../Images/godgaji_img/logo_text.svg';
import my_page from '../../Images/godgaji_img/my_page.svg';

const cx = classNames.bind(styles);

export default function Main() {
  return (
    <LayoutContainer option="notScroll">
      <>
        <div className={cx('nav')}>
          <Link to="/">
            <button type="button" className={cx('btn_w')}>
              godgaji
            </button>
          </Link>
          <Link to="/">
            <div>
              <img src={my_page} width="40" />
            </div>
          </Link>
        </div>
        <div className={cx('box')}>
          <div className={cx('item')}>
            <img src={logo} className={cx('logo')} />
            <Link to="/theme">
              <Button>테마</Button>
            </Link>
          </div>
        </div>
        <div className={cx('footer')}>
          <img src={logo_text} width="50px" />
        </div>
      </>
    </LayoutContainer>
  );
}
