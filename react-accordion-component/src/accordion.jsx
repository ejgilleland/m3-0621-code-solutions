import React from 'react';

class AccordionSegment extends React.Component {
  render() {
    return (this.props.content === '')
      ? (
        <div id={this.props.identifier} className="accordion-segment">
          <h2 onClick={this.props.handleClick} className="segment-title">{this.props.title}</h2>
        </div>
        )
      : (
        <div id={this.props.identifier} className="accordion-segment">
          <h2 onClick={this.props.handleClick} className="segment-title">{this.props.title}</h2>
          <p className="segment-content">{this.props.content}</p>
        </div>
        );
  }
}

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = { active: '' };
  }

  clickHandler(event) {
    const id = event.target.closest('div').id;
    if (id === this.state.active) {
      this.setState({ active: '' });
    } else {
      this.setState({ active: id });
    }
  }

  render() {
    let index = -1;
    const topicsList = this.props.topics.map(i => {
      index++;
      return <AccordionSegment key={index} identifier={index} title={i.title} content={(index.toString() === this.state.active) ? i.content : ''} handleClick={this.clickHandler} />;
    });
    return (
      <div>{topicsList}</div>
    );
  }
}
