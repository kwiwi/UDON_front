import React, { Component } from 'react';
import { Menu, Label, Image } from 'semantic-ui-react';

const UserInfo = (props) => {
  if (props.user.logged_in)
    return <label><i>Bienvenue, {props.user.name}</i></label>
  else
    return <a onClick={props.user.showLoginRegisterModal}>
      Sign in / register
    </a>
}

const Nav = (props) => {

  function makeOnClickHandler (name) {
    return () => {
      if (name !== props.current_view)
        props.onClick(name);
    }
  }

  function makeMenuItem (name) {
    return <Menu.Item
      name={name}
      active={name === props.CurrentView}
      onClick={makeOnClickHandler(name)}
      key={name}
    />
  }
  return <div>
  <Image src="/logo.png">
  </Image>
  <Menu secondary vertical>
    {
      ['On Air', 'Replay', 'About', 'Upload', 'Adm'].map(makeMenuItem)
    }
  </Menu>
  <UserInfo user={props.user}/>
  </div>
};

export default Nav;
