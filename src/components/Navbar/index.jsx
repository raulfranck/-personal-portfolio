import React from 'react';
import './style.css';
import logoImg from '../../assets/logoImg.png';

function Navbar() {

  return (
    <nav className="navbar-main">
      <div className="contaier">
        <div>
          <img src={logoImg} alt="" />
        </div>

        <ul className="navbar-ul">
          <li>Sobre</li>
          <li>Tecnologias</li>
          <li>Portifólio</li>
          <li>Contato</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;