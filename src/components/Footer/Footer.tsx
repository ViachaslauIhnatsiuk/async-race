import React, { FC } from 'react';
import logo from '../../assets/rs-logo.svg';
import s from './Footer.module.css';

const Footer: FC = () => {
  return (
    <div className={s.wrapper}>
      <a
        href="https://github.com/ViachaslauIhnatsiuk"
        target="_blank"
        className={s.github}
        rel="noreferrer">GitHub
      </a>
      <div className={s.year}>2022</div>
      <a
        href="https://rs.school/js/"
        target="_blank"
        rel="noreferrer">
        <img className={s.logo} src={logo} alt="rolling-scopes-school logo" />
      </a>
    </div>
  );
};

export { Footer };
