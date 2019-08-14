import React from 'react';

const sideBarStyle = {
    width: '20%',
};

class Sidebar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <aside style={sideBarStyle}>
            <ul><li><a>About me</a></li></ul>
        </aside>;
    }
  }

  export default Sidebar;