import React from 'react';
import './Information.css';

const Information = () => {
  return (
    <div>
        <div class="infomation">
    <div class="subway_Utilization">
      <p>써브웨이를 제대로 즐기는 방법!</p>
      <p>
        <a href="#">
          <span>이용방법</span>
        </a>
      </p>
    </div>
    <div class="subway_History clearFix">
      <p>50년 역사를 가진 No.1 프랜차이즈의 성장기</p>
      <p>
        <a href="#">
          <span>써브웨이 역사</span>
        </a>
      </p>
    </div>
    <div class="subway_News">
      <div class="subway_News_hd">
        <h2>What's News</h2>
        <p>써브웨이의 다양한 소식을
          빠르게 전달해드립니다.
        </p>
      </div>
      <div class="subway_News_post">
        <ul>
          <li><a href="#">칩 일시 판매 중단 안내</a></li>
          <li><a href="#">웨지 포테이토 일시 판매 중단 안내</a></li>
          <li><a href="#">써브웨이 고객선터 2022년 설 연휴 휴무 안내</a></li>
        </ul>
        <p><a href="">more</a></p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Information