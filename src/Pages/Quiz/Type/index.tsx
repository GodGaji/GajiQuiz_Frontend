import React, { CSSProperties } from 'react';
import styles from '../Quiz.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Type({ type, exam, handleClick }: Props) {
  let style: CSSProperties;
  const type3 = ['O', 'X'];

  if (type === 1) {
    style = { gridTemplateColumns: '1fr' };
  } else if (type === 2) {
    style = { gridTemplateColumns: '1fr 1fr' };
  } else {
    style = { gridTemplateColumns: '1fr 1fr' };
    exam = type3;
  }

  return (
    <div className={cx('App')}>
      <div className={cx('grid')} style={style}>
        {exam?.map((answer, index) => {
          return (
            <li
              className={cx('item')}
              key={index}
              value={index}
              onClick={handleClick}
            >
              {answer}
            </li>
          );
        })}
      </div>
    </div>
  );
}

interface Props {
  type: number;
  exam?: string[];
  handleClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
}
