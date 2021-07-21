import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this.autoStepper = this.autoStepper.bind(this);
    this.autoResetter = this.autoResetter.bind(this);
    this.clickLeftArrow = this.clickLeftArrow.bind(this);
    this.clickRightArrow = this.clickRightArrow.bind(this);
    this.clickDot = this.clickDot.bind(this);
  }

  clickLeftArrow(event) {
    this.setState({ currentIndex: ((this.state.currentIndex + this.props.items.length) - 1) % this.props.items.length });
    this.autoResetter();
    this.autoStepper();
  }

  clickRightArrow(event) {
    this.setState({ currentIndex: ((this.state.currentIndex + this.props.items.length) + 1) % this.props.items.length });
    this.autoResetter();
    this.autoStepper();
  }

  clickDot(event) {
    this.setState({
      currentIndex: (event.target.tagName === 'li')
        ? parseInt(event.target.id, 10)
        : parseInt(event.target.closest('li').id, 10)
    });
    this.autoResetter();
    this.autoStepper();
  }

  componentDidMount() {
    this.autoStepper();
  }

  autoStepper() {
    this.timer = setInterval(
      () => this.setState({ currentIndex: ((this.state.currentIndex + this.props.items.length) + 1) % this.props.items.length }),
      3000
    );
  }

  autoResetter() {
    clearInterval(this.timer);
  }

  render() {
    const keyList = this.props.items.map((element, index) => {
      return (
        <li key={element.index} id={index} onClick={this.clickDot}>
          {(this.state.currentIndex === index)
            ? <i className="fas fa-circle"></i>
            : <i className="far fa-circle"></i>}
        </li>
      );
    });
    return (
      <div className="carousel">
        <div onClick={this.clickLeftArrow} className="arrow-left">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="carousel-body">
          <div className="carousel-image-container">
            <img src={this.props.items[this.state.currentIndex].source} alt={this.props.items[this.state.currentIndex].name} />
          </div>
          <ul className='index'>{keyList}</ul>
        </div>
        <div onClick={this.clickRightArrow} className="arrow-right">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    );
  }
}
