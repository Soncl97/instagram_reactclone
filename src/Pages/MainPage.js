import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../component/Nav'
import Feeds from './Feeds'
import MainRight from './MainRight'

class MainPage extends React.Component {

  render() {
    return (
      <>
        <Nav />
        <div className="feedMainRight">
          <Feeds />
          <MainRight />
        </div>
      </>
    );
  }
}

export default withRouter(MainPage);