import React from 'react';

import Post from './post/post';
import Sidebar from './sidebar/sidebar';

const mainStyle = {
    display: 'flex',
};
const Color = {
    background: '#efefef',
    padding: '50px'
};
  

class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <main style={Color}>
            <div style={mainStyle}>
                <Post/>
                <Sidebar/>
            </div>
        </main>
      );
    }
  }

 

export default App;