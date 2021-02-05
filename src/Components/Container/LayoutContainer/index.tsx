import React from 'react';
import styles from './LayoutContainer.module.css';
import classNames from 'classnames/bind';
import BackContainer from '../BackContainer';
import Footer from '../../Footer';

const cx = classNames.bind(styles);

export default function LayoutContainer({ children, color, option }: Props) {
  return (
    <BackContainer color={color} option={option}>
      <>
        <div className={cx('App')}>{children}</div>
        {option === 'footer' ? <Footer /> : null}
      </>
    </BackContainer>
  );
}

interface Props {
  children: JSX.Element;
  color?: string;
  option?: string;
}
