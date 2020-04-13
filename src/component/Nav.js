import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Pages/Main.css';
import instaImg from '../Images/logo_text.png';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className='leftTopIcons'>
            <img className='img-logo' src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png' alt=""/>
            <img className='text-logo' src={instaImg} alt=""/>
          </div>
          <div>
            <div className='centerTopIcons'>
              <button className='btn'>검색</button>
            </div>
          </div> 
          <div className='rightTopIcons'>
            <img className='search' src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png' alt=""/>
            <img className='heart' src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png' alt=""/>
            <img className='profile' src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png' alt=""/>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);