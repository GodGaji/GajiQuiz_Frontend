import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import classNames from 'classnames/bind';
import LayoutContainer from '../../components/Container/LayoutContainer';
import NavBar from '../../components/NavBar';
import Box from '../../components/Container/Box';
import Title from '../../components/Title';

const cx = classNames.bind(styles);

type themeInfo = {
  title: String,
};

const themes: Array<themeInfo> = [
  { title: '1' },
  { title: '2' },
  { title: '3' },
  { title: '4' },
  { title: '5' },
  { title: '6' },
];

function Main() {
  return (
    <div className={cx('App')}>
      <NavBar />

      <Box>
        <Title>title #1</Title>
        <div className={cx('myInfo')}>
          <div>border</div>
        </div>
      </Box>

      <Box>
        <Title>title #2</Title>
        <div className={cx('category')}>
          {themes.map((theme, index) => {
            return (
              <Link to="/quiz">
                <div className={cx('item')}>{theme.title}</div>
              </Link>
            );
          })}
        </div>
      </Box>
    </div>
  );
}

export default function main() {
  return (
    <LayoutContainer option="footer">
      <Main />
    </LayoutContainer>
  );
}
