import React from 'react'
import humanizeDuration from 'humanize-duration'
import styles from './Timer.css';

class Timer extends React.Component {
  constructor(props){
    super(props)
  
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    }
  }
  
  startTimer = () => {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }
  
  resetTimer = () => {
    this.setState({
      time: 0,
      isOn: false
    }, () => {
      this.startTimer()
    })
  }

  humanizeConfig = () => {
    return {
      round: true,
      spacer: '',
      delimiter: ' ',
      largest: 3,
      units: ['d','h','m', 's'],
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
          ms: () => 'ms',
        }
      }
    }
  }

  render() {  
    const { color } = this.props
    return(
      <div className={styles.timer}>
        <h3 className={styles.time}>{humanizeDuration(this.state.time, this.humanizeConfig())}</h3>
        <button
          style={{backgroundColor: color}}
          className={styles.button}
          onClick={this.resetTimer}
        ><i className="fas fa-redo-alt"></i></button>
      </div>
    )
  }
}

export default Timer