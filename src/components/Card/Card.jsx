import cx from 'classnames';
import React from 'react';

import * as styles from './Card.module.scss';

const Card = ({
  back = false,
  className,
  onClick,
  provided,
  rank,
  snapshot,
  suit,
}) => (
  <div
    className={cx(
      styles.root,
      { [styles.back]: back },
      {
        [styles.active]: snapshot?.isDragging,
      },
      className
    )}
    onClick={onClick}
    ref={provided?.innerRef}
    {...provided?.draggableProps}
    {...provided?.dragHandleProps}
    {...provided?.droppableProps}
  >
    {rank && (
      <>
        <span className={cx(styles.rankTop, styles[suit])}>{rank}</span>
        <span className={cx(styles.rankBot, styles[suit])}>{rank}</span>
      </>
    )}
  </div>
);

export default Card;
