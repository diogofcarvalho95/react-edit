import React from 'react';
import Comments from './../comments/comments';

const postStyle = {
    width: '80%',
    paddingRight: '50px',
    paddingBottom: '50px',
    borderRight: '1px solid #afafaf',
};

class Post extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <article style={postStyle} id="article">
        <img src="https://via.placeholder.com/350x150"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum nulla velit, et pellentesque nisl malesuada et. Mauris tempor vel magna eu fermentum. Etiam ornare ipsum eu lacinia ornare. Fusce consequat enim vitae ultrices posuere. Aenean eu tincidunt metus. Vivamus maximus urna vitae lectus fringilla laoreet. Sed euismod quis ex eu lobortis. Duis varius dignissim turpis, vitae auctor ante elementum a.</p>
        <Comments/>
        </article>;
    }
  }

  export default Post;