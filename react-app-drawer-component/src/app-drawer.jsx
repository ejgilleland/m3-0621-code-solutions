import React from 'react';

function Navlink(props) {
  return <li><a href='#'>{props.linkName}</a></li>;
}

function DrawerIcon(props) {
  return (
    <div onClick={props.clickBehavior} className="icon-holder">
      <i className="fas fa-bars"></i>
    </div>
  );
}

function DrawerMenu(props) {
  return (
    <div onClick={props.clickBehavior} className="drawer-modal">
      <div className="drawer-content">
        <h2 className="drawer-title"><a href='#'>Menu</a></h2>
        <ul>
          <Navlink linkName="About" />
          <Navlink linkName="Get Started" />
          <Navlink linkName="Sign In" />
        </ul>
      </div>
    </div>
  );
}

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = { active: false };
  }

  clickHandler(event) {
    if (event.target.closest('.icon-holder')) {
      this.setState({ active: true });
    } else if (!event.target.closest('.drawer-content')) {
      this.setState({ active: false });
    } else if (event.target.tagName === 'A') {
      this.setState({ active: false });
    }
  }

  render() {
    return (
      this.state.active
        ? <DrawerMenu clickBehavior={this.clickHandler} />
        : <DrawerIcon clickBehavior={this.clickHandler} />
    );
  }
}
