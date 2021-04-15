import cx from 'classnames';
import React from 'react';

import { useSelector } from 'react-redux';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import Card from '../Card';
import DragPlaceholder from '../DragPlaceholder';

import { DraggbleTypes } from '../../../utils';

import * as styles from './Hold.module.scss';

const Hold = () => {
  const { cardHold, cardDragging } = useSelector(({ state }) => state);

  const isDropDisabled = cardDragging.droppableId !== DraggbleTypes.HAND;

  return (
    <div className={cx(styles.root)}>
      {Object.keys(cardHold).map(hold => {
        const holdStack = cardHold[hold];
        return (
          <Droppable
            droppableId={`hold${hold}`}
            isDropDisabled={isDropDisabled}
            key={hold}
          >
            {(provided, snapshot) => (
              <div
                className={cx(styles.column, {
                  [styles.active]: snapshot.isDraggingOver,
                  [styles.error]:
                    snapshot.draggingOverWith?.split('|')[0] ===
                    DraggbleTypes.STOCK,
                })}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Card className={cx(styles.empty)} />

                {holdStack.map(({ rank, suit }, index) => (
                  <Draggable
                    draggableId={`${hold}|${suit}|${rank}`}
                    index={index}
                    isDragDisabled={index < holdStack.length - 1}
                    key={`${hold}|${suit}|${rank}`}
                  >
                    {(provided, snapshot) => (
                      <Card
                        className={cx(styles.card, {
                          [styles.nope]: !snapshot.isDragging,
                        })}
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
      })}
    </div>
  );
};

export default Hold;
