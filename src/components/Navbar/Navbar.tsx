import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar: FC = () => {
  return (
    <div className={s.wrapper}>
      <Link to="/"><button className={s.button}>GARAGE</button></Link>
      <Link to="/winners"><button className={s.button}>WINNERS</button></Link>
    </div>
  );
};

export { Navbar };