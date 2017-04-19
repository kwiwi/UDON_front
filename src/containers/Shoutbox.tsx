import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from 'styled-components';
import * as io from 'socket.io-client';

const ShoutboxDiv = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  width: 240px;
  min-height: calc(100% - 80px);
  margin-left: 160px;
  margin-right: 80px;

  background-color: inherit;

  z-index: 2;
`

const ShoutboxInput = styled.input`
  position: absolute;
  bottom: 40px;
  left: 0px;
  right: 0px;
  height: 80px;
  width: 100%;
  overflow: auto;
  border: solid;
  border-width: 3px;
  border-color: #a3a3a3;
  background-color: inherit;
`

const Message = ({name, text,}) => {
  return <div>
    <h1>{name}</h1>
    <p>{text}</p>
  </div>
};

interface ShoutboxState {
  socket: any;
  text: string;
  msgList: Array<{
    name: string,
    text: string
  }>;
}
export class Shoutbox extends React.Component<undefined, ShoutboxState> {

  constructor () {
    super();
    this.state = {
      socket : io('http://localhost:3000/'),
      text: '',
      msgList: [],
    };
    this.state.socket.on('chat message', function (name, text) {
      this.setState({
        msgList: this.state.msgList.concat([{name:name, text:text}])
      })
    }.bind(this))
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.text == '')
      return ;
    this.state.socket.emit('chat message', this.state.text);
    this.setState({
      text: ''
    });
    event.preventDefault();
  }

  render () {
    const listMsgs = this.state.msgList.map(
      ({name, text}) => <li><Message name={name} text={text}/></li>
    );
    return <ShoutboxDiv>
      <form onSubmit={this.handleSubmit}>
        <ul>{listMsgs}</ul>
        <ShoutboxInput type="text" value={this.state.text} onChange={this.handleChange}/>
      </form>
    </ShoutboxDiv>
  }
}
