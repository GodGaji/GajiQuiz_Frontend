import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import classNames from 'classnames/bind';
import LayoutContainer from '../../Components/Container/LayoutContainer';
import NavBar from '../../Components/NavBar';
import Title from '../../Components/Title';

const cx = classNames.bind(styles);

type theme = {
  id: number;
  title: string;
};

const themes: Array<theme> = [
  { id: 1, title: '1' },
  { id: 2, title: '2' },
  { id: 3, title: '3' },
  { id: 4, title: '4' },
  { id: 5, title: '5' },
  { id: 6, title: '6' },
];

export default function Main() {
  return (
    <LayoutContainer option="footer">
      <>
        <NavBar />

        <div className={cx('box')}>
          <Title>title #1</Title>
          <div className={cx('myInfo')}>
            <div>border</div>
          </div>
        </div>

        <div className={cx('box')}>
          <Title>title #2</Title>
          <div className={cx('category')}>
            {themes.map((theme) => {
              return (
                <Link to={`/quiz/${theme.id}`} key={theme.id}>
                  <div className={cx('item')}>{theme.title}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </>
    </LayoutContainer>
  );
}
