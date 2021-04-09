import cx from 'classnames';
import React from 'react';

import * as styles from './Card.module.scss';

const Card = ({ rank, suit, className, back = false }) => (
  <div
    className={cx(
      styles.root,
      styles[suit],
      { [styles.back]: back },
      className
    )}
  >
    {rank && <span className={cx(styles.rank)}>{rank}</span>}
  </div>
);

export default Card;
