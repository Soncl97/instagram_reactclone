import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Pages/Main.css';

class MainRight extends React.Component {
  render() {
    return (
      <div>
        <div className="mainRight">
        <div className="top-right">
          <img className="img2" src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=I0KwANZFumQAX_J1js7&oh=f49bd6a19b9476eb2733edd1cb395afa&oe=5EA94870" alt=""/>
          <div className="top-right2">
            <span className="commentUser">wecode_bootcamp</span>
            <span className="wecode">WeCode | 위코드</span>
          </div>
        </div>
        <div className="right-all">
        <div className = "main-right"></div>
          <div className="right1">
            <div className="storyEvery">
            <span className="story">스토리</span>
            <span className="every">모두 보기</span>
            </div>
            <div className="right3">
              <img className="img3" src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/90439911_239431593905031_6018242990398597745_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=lXvuMvxaMvQAX-xG88r&oh=88a4596ba25832533a31f9ec11ed958f&oe=5EABBF74" alt=""/>
              <div className="p1">
                <span className="commentUser">soncl_97</span>
                <span className="commentund">16분전</span>
              </div>
            </div>
        </div>
        <div className="right2">
          <div className="storyEvery">
          <span className="story">회원님들을 위한 추천</span>
          <span className="every">모두 보기</span>
          </div>
            <div className="right4">
              <img className="img4" src ="https://d3eh3svpl1busq.cloudfront.net/UAvWdfoTcwEcpuKzJJEHxyeFHHtyYDjU/assets/static/source/wp-content/uploads/2017/06/c41069a5c852822e29bead707ab04e30.vanilla-cake-4.jpg" alt=""/>
              <div className="p1">
                <span className="commentUser">front_dve11</span>
                <span className="commentund">baba_0님 외에 2명이...</span>
              </div>
              <span className="follow">팔로우</span>
            </div>
            </div>
        </div>
        <span className="p2">Instagram 정보·지원·홍보 센터·API·채용 정보·개인정보처리방침·약관·디렉터리·프로필·해시태그·언어 2019 INSTAGRAM</span>
        </div>
      </div>
    );
  }
}

export default withRouter(MainRight);