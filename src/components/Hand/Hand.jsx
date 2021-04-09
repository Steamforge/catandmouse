import cx from 'classnames';
import React from 'react';

import Card from '../Card';

import * as styles from './Hand.module.scss';

const Hand = ({ cards }) => (
  <div className={cx(styles.root)}>
    {cards.map(({ rank, suit }) => (
      <Card
        className={cx(styles.card)}
        key={`${suit}${rank}`}
        rank={rank}
        suit={suit}
      />
    ))}
  </div>
);

export default Hand;
