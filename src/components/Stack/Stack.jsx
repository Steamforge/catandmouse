import cx from 'classnames';
import React from 'react';

import { Draggable } from 'react-beautiful-dnd';

import Card from '../Card';

import * as styles from './Stack.module.scss';

const Stack = ({ className, count, onClick, source, topCard }) => {
  const getCardBack = () => <Card back className={cx(styles.card)} />;

  return (
    <div className={cx(styles.root, className)} onClick={onClick}>
      {topCard && (
        <Draggable
          draggableId={`${source}|${topCard.suit}|${topCard.rank}`}
          index={count - 1}
        >
          {(provided, snapshot) => (
            <>
              <Card
                className={cx(styles.card)}
                provided={provided}
                rank={topCard.rank}
                snapshot={snapshot}
                suit={topCard.suit}
              />
              {snapshot.isDragging && (
                <Card
                  className={cx(styles.card)}
                  rank={topCard.rank}
                  suit={topCard.suit}
                  style={{ transform: 'none !important', visibility: 'hidden' }}
                />
              )}
            </>
          )}
        </Draggable>
      )}
      {count >= 1 && getCardBack()}
      {count >= 2 && getCardBack()}
      {!topCard && count >= 3 && getCardBack()}
      {count === 0 && <Card className={cx(styles.empty)} />}
    </div>
  );
};

export default Stack;
