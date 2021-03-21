import React, { useCallback, useEffect } from 'react';
import styles from './Theme.module.css';
import classNames from 'classnames/bind';
import LayoutContainer from '../../Components/Container/LayoutContainer';
import NavBar from '../../Components/NavBar';
const cx = classNames.bind(styles);

export default function Theme() {
  const themes = useCallback(async () => {
    const response = await fetch(`http://localhost:8080/api/v1/category/all`);

    const data = await response.json();
    console.log(data);
  }, []);

  useEffect(() => {
    themes();
  }, []);

  return (
    <LayoutContainer option="footer">
      <>
        <NavBar />
        <div className={cx('category')}>
          {/*themes.map((theme) => {
            return (
              <Link to={`/quiz/${theme.id}`} key={theme.id}>
                <div className={cx('item')}>
                  <img src={test} />
                </div>
                <div className={cx('title')}>{theme.title}</div>
              </Link>
            );
          })*/}
        </div>
      </>
    </LayoutContainer>
  );
}
