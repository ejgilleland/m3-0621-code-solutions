import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    if (event.target.closest('div').classList.contains('arrow-left')) {
      this.setState({ currentIndex: ((this.state.currentIndex + this.props.items.length) - 1) % this.props.items.length });
      this.componentWillUnmount();
    } else if (event.target.closest('div').classList.contains('arrow-right')) {
      this.setState({ currentIndex: ((this.state.currentIndex + this.props.items.length) + 1) % this.props.items.length });
      this.componentWillUnmount();
    } else if (event.target.closest('ul').classList.contains('index')) {
      this.setState({
        currentIndex: (event.target.tagName === 'li')
          ? parseInt(event.target.id, 10)
          : parseInt(event.target.closest('li').id, 10)
      });
      this.componentWillUnmount();
    }
    this.componentDidMount();
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({ currentIndex: ((this.state.currentIndex + this.props.items.length) + 1) % this.props.items.length }),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const keyList = this.props.items.map((element, index) => {
      return (
        <li key={element.index} id={index}>
          {(this.state.currentIndex === index)
            ? <i className="fas fa-circle"></i>
            : <i className="far fa-circle"></i>}
        </li>
      );
    });
    return (
      <div className="carousel">
        <div onClick={this.clickHandler} className="arrow-left">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="carousel-body">
          <div className="carousel-image-container">
            <img src={this.props.items[this.state.currentIndex].source} alt={this.props.items[this.state.currentIndex].name} />
          </div>
          <ul onClick={this.clickHandler} className='index'>{keyList}</ul>
        </div>
        <div onClick={this.clickHandler} className="arrow-right">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    );
  }
}
