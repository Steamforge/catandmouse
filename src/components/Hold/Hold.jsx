import cx from 'classnames';
import React from 'react';

import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

import Card from '../Card';
import DragPlaceholder from '../DragPlaceholder';

import * as styles from './Hold.module.scss';

const Hold = () => {
  const cardHold = useSelector(({ state }) => state.cardHold);

  return (
    <div className={cx(styles.root)}>
      {Object.keys(cardHold).map(hold => (
        <Droppable droppableId={`hold${hold}`} key={hold}>
          {(provided, snapshot) => (
            <div
              className={cx(styles.column, {
                [styles.active]: snapshot.isDraggingOver,
              })}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Card className={cx(styles.empty)} />

              {cardHold[hold].map(({ rank, suit }) => (
                <Card
                  className={cx(styles.card)}
                  key={`${hold}${suit}${rank}`}
                  provided={provided}
                  rank={rank}
                  snapshot={snapshot}
                  suit={suit}
                />
              ))}
              <DragPlaceholder provided={provided} />
            </div>
          )}
        </Droppable>
      ))}
    </div>
  );
};

export default Hold;
