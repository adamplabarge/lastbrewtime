import React from 'react';
import humanizeDuration from 'humanize-duration';
import styles from './Timer.css';

type Props = {
  onIncrement: () => void,
  color: string
};

class Timer extends React.Component<Props> {
  props: Props;

  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      start: 0
    };
  }

  startTimer = () => {
    const { time } = this.state
    this.setState({
      time: time,
      start: Date.now() - time
    }, () => {
      this.timer = setInterval(() => this.setState({
        time: Date.now() - this.state.start
      }), 1);
    })
  }
  
  resetTimer = () => {
    this.setState({
      time: 0,
    }, () => {
      this.startTimer()
    })
  }

  handleOnClick = () => {
    const { onIncrement } = this.props;

    onIncrement();
    this.resetTimer();
  }

  render() {
    const { color } = this.props;
    const { time } = this.state;

    return (
      <div className={styles.timer}>
        <h3 className={styles.time}>
          {humanizeDuration(time, humanizeConfig)}
        </h3>
        <button
          type="button"
          style={{ backgroundColor: color }}
          className={styles.button}
          onClick={this.handleOnClick}
        >
          <i className="fas fa-redo-alt" />
        </button>
      </div>
    );
  }
}

const humanizeConfig = {
  round: true,
  spacer: '',
  delimiter: ' ',
  largest: 3,
  units: ['d', 'h', 'm', 's'],
  language: 'shortEn',
  languages: {
    shortEn: {
      y: () => 'y',
      mo: () => 'mo',
      w: () => 'w',
      d: () => 'd',
      h: () => 'h',
      m: () => 'm',
      s: () => 's',
      ms: () => 'ms'
    }
  }
};

export default Timer;
