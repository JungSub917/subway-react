import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section>
      <div className="banner">
        <div className="event_Pages">
          <img src="./images/Banner.jpg" alt="" />
        </div>
        <div className="mid_List clearFix">
          <ul>
            <li>
              <div className="find_Store">
                <a href="#">
                  매장찾기
                </a>
              </div>
            </li>
            <li>
              <div className="question_Store">
                <a href="#">
                  가맹신청·문의
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Banner