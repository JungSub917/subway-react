import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="head">
        <h1><img src="/images/logo_w.png" alt="" /> Subway</h1>
        <div className="gnb clearFix">
          <ul>
            <li><a href="#">로그인</a></li>
            <li><a href="#">회원가입</a></li>
            <li><a href="#"><img src="/images/icon_utill_global.png" alt="" /></a></li>
          </ul>
        </div>
        <div className="lnb clearFix">
          <ul>
            <li><a href="#">메뉴소개</a></li>
            <li><a href="#">이용방법</a></li>
            <li><a href="#">새소식</a></li>
            <li><a href="#">써브웨이</a></li>
            <li><a href="#">가맹점</a></li>
            <li><a href="#">온라인주문</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;