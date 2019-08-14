import React from 'react';

const apagarStyle = {
    display: 'block',
    marginBottom: '15px'
};
const textBoxStyle = {
    width: '100%',
    height: '100px'
};
const btnStyle = {
    height: '50px',
    padding: '0 15px'
};

class Comments extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comment: '',
        comments: [
            {
                id: 1,
                comment: 'Comentário 1'
            },
            {
                id: 2,
                comment: 'Comentário 2'
            }
        ]
      };
      this.addcomment = this.addcomment.bind(this);
      this.apagaComment = this.apagaComment.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    addcomment(ev) {
        ev.preventDefault();
        const commentarios = [].concat(this.state.comments);
        const lastid = commentarios [commentarios .length - 1]['id'];
        if(this.state.comment != "") {
            commentarios.push(
                {id: lastid + 1, comment: this.state.comment}
            );
            this.setState({
                comment: '',
                comments: commentarios,
            });
        }
    }
    apagaComment(id) {
        const commentarios = [].concat(this.state.comments);
        const index = commentarios.map(x => {
            return x.id;
        }).indexOf(id);
        commentarios.splice(index, 1);
        this.setState({
            comments: commentarios,
        });
    }
    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }
    render() {
        const listComments = this.state.comments.map((item) =>
            <li>{item.comment}<span><a style={apagarStyle} onClick={this.apagaComment.bind(this, item.id)} href="#">Apagar comentário</a></span></li> 
        );
        return <div>
        <h2>Comentários</h2>
        <ul>
            {listComments}
        </ul>
        <div>
            <form onSubmit={this.addcomment}>
                <textarea style={textBoxStyle} onChange={this.handleChange} name="comment" placeholder="Escreva o comentário" value={this.state.comment} required></textarea>
                <button style={btnStyle} type="submit">Adicionar comentário</button>
            </form>
        </div>
        </div>;
    }
  }

  export default Comments;