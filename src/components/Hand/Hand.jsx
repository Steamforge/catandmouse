import cx from 'classnames';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { useSelector } from 'react-redux';

import Card from '../Card';
import DragPlaceholder from '../DragPlaceholder';

import { DraggbleTypes } from '../../../utils';

import * as styles from './Hand.module.scss';

const Hand = () => {
  const { cardHand, cardDragging } = useSelector(({ state }) => state);
  const isDropDisabled = cardDragging.droppableId !== DraggbleTypes.HAND;

  return (
    <Droppable
      direction="horizontal"
      droppableId={DraggbleTypes.HAND}
      isDropDisabled={isDropDisabled}
    >
      {provided => (
        <div
          className={cx(styles.root)}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {cardHand.map(({ rank, suit }, index) => (
            <Draggable
              draggableId={`${DraggbleTypes.HAND}|${suit}|${rank}`}
              index={index}
              key={`${DraggbleTypes.HAND}|${suit}|${rank}`}
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
