import cx from 'classnames';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { useSelector } from 'react-redux';

import Card from '../Card';
import DragPlaceholder from '../DragPlaceholder';

import * as styles from './Hand.module.scss';

const Hand = () => {
  const cardHand = useSelector(({ state }) => state.cardHand);

  return (
    <Droppable direction="horizontal" droppableId="hand">
      {provided => (
        <div
          className={cx(styles.root)}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {cardHand.map(({ rank, suit }, index) => (
            <Draggable
              draggableId={`${suit}${rank}`}
              index={index}
              key={`${suit}${rank}`}
            >
              {(provided, snapshot) => (
                <Card
                  className={cx(styles.card)}
                  provided={provided}
                  rank={rank}
                  snapshot={snapshot}
                  suit={suit}
                />
              )}
            </Draggable>
          ))}

          <DragPlaceholder provided={provided} />
        </div>
      )}
    </Droppable>
  );
};

export default Hand;
