import React from 'react';
import { withRouter } from 'react-router-dom';
import '../Pages/Login.css';
import instaImg from '../Images/logo_text.png';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id:"",
      password:"",
      disabledBtn:"disabledBtn",
    }
  }

  handleId = (e) => {
    this.setState({
      id: e.target.value
    })
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  };

  handleBtn = (e) => {
    if(this.state.id.length > 0 && this.state.password.length > 0) {
      this.setState({
        disabledBtn: "abledBtn"
      })
    } else if(this.state.id.length === 0 || this.state.password.length === 0) {
      this.setState({
        disabledBtn:"disabledBtn"
      })
    }
  }

  goToSignup = (e) => {
    e.preventDefault();
    
    if(this.state.id !== "sodkdlel" && this.state.password !== "soqlqjs") {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    } else if(this.state.id === "" || this.state.password === "") {
      alert("아이디와 비밀번호를 입력해주세요.")
    } else {
      this.props.history.push('/main');
    }
  }

  render() {
    return (
      <div className="all">
        <div className="border">
          <img className="instaImg" src = {instaImg} alt=""/>  
          <input 
          type="password" 
          className="id" 
          vlaue={this.state.id}
          onChange={this.handleId}
          placeholder="전화번호, 사용자 이름 또는 이메일"/>
          
          <input type="password" 
          className="rePassword"
          value={this.state.password}
          onChange={this.handlePassword}
          onKeyUp={this.handleBtn}
          placeholder="비밀번호"/>
          
          <div
            className={this.state.disabledBtn}
            onClick={this.goToSignup}>
              로그인
          </div>  
          <p className="help-msg">비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);