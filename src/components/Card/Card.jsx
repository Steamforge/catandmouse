import cx from 'classnames';
import React from 'react';

import * as styles from './Card.module.scss';

const Card = ({
  back = false,
  className,
  onClick,
  placeholder,
  provided,
  rank,
  snapshot,
  style,
  suit,
  value,
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
    style={style}
    {...provided?.draggableProps}
    {...provided?.dragHandleProps}
    {...provided?.droppableProps}
  >
    {rank && (
      <>
        <span className={cx(styles.rankTop, styles[suit])}>{value}</span>
        <span className={cx(styles.rankBot, styles[suit])}>{value}</span>
      </>
    )}
    {placeholder && (
      <span className={cx(styles.placeholder)}>{placeholder}</span>
    )}
  </div>
);

export default Card;
