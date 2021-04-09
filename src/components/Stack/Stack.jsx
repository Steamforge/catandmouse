import cx from 'classnames';
import React from 'react';

import Card from '../Card';

import * as styles from './Stack.module.scss';

const Stack = ({ count, onClick }) => (
  <>
    <div>{count}</div>
    <div className={cx(styles.root)} onClick={onClick}>
      {count >= 1 && <Card back className={cx(styles.card, styles.cardTop)} />}
      {count >= 2 && <Card back className={cx(styles.card, styles.cardMid)} />}
      {count >= 3 && <Card back className={cx(styles.card, styles.cardBot)} />}
      {count === 0 && <Card className={cx(styles.empty)} />}
    </div>
  </>
);

export default Stack;
