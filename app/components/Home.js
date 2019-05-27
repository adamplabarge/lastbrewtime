// @flow
import React, { Component } from 'react';
import styles from './Home.css';
import Timer from './Timer';

type Props = {
  incrementA: () => void,
  incrementB: () => void
};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    const { incrementA, incrementB } = this.props;

    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.row_header}>
          <span>Last Brew Time</span> <i className="fas fa-coffee" />
        </div>
        <div className={styles.row}>
          <Timer onIncrement={incrementA} color="red" />
        </div>
        <div className={styles.row}>
          <Timer onIncrement={incrementB} color="blue" />
        </div>
        <div className={styles.row_footer}>
          <p className={styles.author}>
            <i className="fab fa-github" /> &nbsp;
            <span>https://github.com/adamplabarge/lastbrewtime</span>
          </p>
        </div>
      </div>
    );
  }
}
