import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Pages/Main.css';

class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "sodkdlel",
      comment:"",
      comments:[]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  handleComment = (e) => {
    this.setState({
      comment: e.target.value
    });
  };

  handleSubmit = (e) => {
    if(this.state.comment) {
      e.preventDefault();
      this.state.comments.push({
        userName: "sodkdlel",
        comment: this.state.comment
      });

      this.setState({
        comment:""
      });
    }
  };

  removeComment = () => {
    this.setState({
      comments: this.state.comments.filter((comment) => this.state.comments)
    })
  }

  render() {
    const commentList = this.state.comments.map(comment => (
      <div>
        <span 
        className="commentUser">{comment.userName}</span>
        <span 
        className="comment">{comment.comment}</span>
        <button onClick={this.removeComment} className="commentBtn">x</button>
      </div>
    ));

    return (
      <div className="main-feed">
        <div className = "feeds">
          <div className="top-icons">
            <img className="my-img" src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=I0KwANZFumQAX_J1js7&oh=f49bd6a19b9476eb2733edd1cb395afa&oe=5EA94870" alt=""/>
            <span className="wecode-bootcamp">wecode_bootcamp</span>
            <img className="three-dot" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt=""/>
          </div>
            <img className="main-page" src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/90883542_147676136602162_6184541158309681491_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=zKZZqc-gg-cAX-gsmMS&oh=cef0285d274c35a2e8285104c28d526a&oe=5EACD1C7" alt=""/>
          <div className="bottom-icons">
            <img className="main-heart" src ="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt=""/>
            <img className="main-talk" src ="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt=""/>
            <img className="share" src ="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" alt=""/>
            <img className="bookmark" src ="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt=""/>
          </div>

          <div className="commentPlus">
            <span 
            className="commentUser">coffee_123
            </span>
            <span 
            className="comment">드이어 끝났다ㅏㅏㅏㅏㅏㅏㅏ
            </span>
            {commentList}
          </div>

          <div className="typeComment">
          <input 
          className="commentBox"
          type = "text"
          placeholder = "댓글쓰기..."
          value={this.state.comment}
          onChange={this.handleComment}/>

          <span>
            <button 
            className="commentBtn"
            onClick={this.handleSubmit}>
              게시
            </button>
          </span>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Feeds);