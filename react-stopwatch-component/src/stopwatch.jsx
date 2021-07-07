import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, clockOn: false };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    if (event.target.closest('.control-button')) {
      if (event.target.closest('.play')) {
        this.setState({ clockOn: true });
        this.timerID = setInterval(() => this.timer(), 1000);
      } else if (event.target.closest('.pause')) {
        clearInterval(this.timerID);
        this.setState({ clockOn: false });
      }
    } else if ((event.target.classList.contains('watch-face') || event.target.closest('.watch-face')) &&
               !this.state.clockOn) {
      this.setState({ time: 0 });
    }
  }

  timer() {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  }

  render() {
    let playButton = '';
    let pauseButton = '';
    if (this.state.clockOn) {
      playButton = 'control-button play hidden';
      pauseButton = 'control-button pause';
    } else {
      playButton = 'control-button play';
      pauseButton = 'control-button pause hidden';
    }
    return (
      <div onClick={this.clickHandler} className="full-stopwatch">
        <div className="watch-face">
          <div className="time">{this.state.time}</div>
        </div>
        <div className="controls">
          <div className={playButton}>
            <i className="fas fa-play"></i>
          </div>
          <div className={pauseButton}>
            <i className="fas fa-pause"></i>
          </div>
        </div>
      </div>
    );
  }
}
