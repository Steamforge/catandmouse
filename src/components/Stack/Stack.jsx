import cx from 'classnames';
import React from 'react';

import Card from '../Card';

import * as styles from './Stack.module.scss';

const Stack = ({ className, count, onClick }) => (
  <>
    {count && <div className={cx(styles.count)}>{count}</div>}
    <div className={cx(styles.root, className)} onClick={onClick}>
      {count >= 1 && <Card back className={cx(styles.card)} />}
      {count >= 2 && <Card back className={cx(styles.card)} />}
      {count >= 3 && <Card back className={cx(styles.card)} />}
      {count === 0 && <Card className={cx(styles.empty)} />}
    </div>
  </>
);

export default Stack;
