import React, { useRef, useState, useCallback } from 'react';
import styles from './Login.module.css';
import classNames from 'classnames/bind';
import LayoutContainer from '../../Components/Container/LayoutContainer';

const cx = classNames.bind(styles);

export default function Login() {
  const [nick, setNick] = useState<string>('');
  const inputEl = useRef<HTMLInputElement>(null);
  const sign = useRef<HTMLInputElement>(null);

  const checkRule = (str: string) => {
    const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/; //정규표현식

    return regex.test(str);
  }; //한글, 영문, 숫자

  const onCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.currentTarget.value;
    const last = str.charAt(str.length - 1);

    e.currentTarget.value = str.replace(/ /g, ''); //공백제거

    if (!sign.current) {
      return;
    }

    if (last === ' ') {
      sign.current.value = '닉네임은 공백이 있을 수 없습니다.';
      e.currentTarget.value = str.substring(0, str.length - 1);
      setNick(e.currentTarget.value);
    } else if (!checkRule(last)) {
      sign.current.value = '닉네임은 한글,영문,숫자만 가능합니다.';
      e.currentTarget.value = str.substring(0, str.length - 1);
      setNick(e.currentTarget.value);
    }

    setNick(str);
  }; //nickname rule 오류 메시지 출력

  const onCheck = () => {
    if (!sign.current) {
      return;
    }

    if (!checkRule(nick)) {
      sign.current.value = '닉네임은 한글,영문,숫자만 가능합니다.';
      return;
    }

    if (nick.length < 2 || nick.length > 8) {
      sign.current.value = '닉네임의 크기는 2에서 8 사이어야 합니다.';
      if (!inputEl.current) {
        return;
      }
      inputEl.current.focus();
      return;
    }

    duplicateCheck(nick);
  }; //nickname length 확인 후 duplicateCheck 호출

  const duplicateCheck = useCallback(async (str) => {
    const user = { id: 0, nickName: '' };
    const response = await fetch(
      `http://localhost:8080/api/v1/member/update/nickname`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(user),
      }
    );

    const data = await response.json();
    let message = '';
    if (data.errors) {
      data.errors.map((error: error) => {
        return (message += error.reason += '\n');
      });
    } else {
      message += str + '님 환영합니다!';
    }

    alert(message);
  }, []); //중복검사

  const onCheckEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onCheck();
  }; //enter 처리

  return (
    <LayoutContainer option="notScroll">
      <>
        <div>
          <div>닉네임 입력</div>
          <input
            type="text"
            autoFocus={true}
            maxLength={8}
            ref={inputEl}
            onKeyPress={onCheckEnter}
            onChange={onCheckChange}
            placeholder="2-8자 이내"
          />
          <br />
          <input
            className={cx('sign')}
            type="text"
            readOnly
            ref={sign}
            value=""
          />
        </div>
        <button type="button" className={cx('btn')} onClick={onCheck}>
          중복검사
        </button>
      </>
    </LayoutContainer>
  );
}

type error = {
  field: string;
  value: string;
  reason: string;
};
