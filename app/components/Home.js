// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import Timer from './Timer'

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.row_header}>
          Last Brew Time
        </div>
        <div className={styles.row}>
          <Timer color="red" />
        </div>
        <div className={styles.row}>
          <Timer color="blue" />
        </div>
        <div className={styles.row_footer}>
          <p className={styles.author}>By - Adam LaBarge</p>
        </div>
      </div>
    );
  }
}
