import cx from 'classnames';
import React from 'react';

import { Draggable, Droppable } from 'react-beautiful-dnd';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';

import Card from '../Card';
import DragPlaceholder from '../DragPlaceholder';
import Stack from '../Stack';

import { DraggbleTypes } from '../../../utils';

import * as styles from './Stock.module.scss';

const Stock = () => {
  const { cardStock } = useSelector(({ state }) => state);

  const topCard = isEmpty(cardStock) ? {} : cardStock.slice(-1)[0];

  return (
    <div className={cx(styles.root)}>
      <Stack className={cx(styles.stack)} count={cardStock.length} />
      {!isEmpty(cardStock) && (
        <Droppable droppableId={DraggbleTypes.STOCK} isDropDisabled>
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Draggable
                draggableId={`${DraggbleTypes.STOCK}|${topCard.suit}|${topCard.rank}`}
                index={cardStock.length - 1}
              >
                {(provided, snapshot) => (
                  <>
                    <Card
                      className={cx(styles.card)}
                      provided={provided}
                      rank={topCard.rank}
                      snapshot={snapshot}
                      suit={topCard.suit}
                      value={topCard.value}
                    />
                    {snapshot.isDragging && (
                      <Card
                        rank={topCard.rank}
                        style={{
                          transform: 'none !important',
                          visibility: 'hidden',
                        }}
                        suit={topCard.suit}
                        value={topCard.value}
                      />
                    )}
                  </>
                )}
              </Draggable>

              <DragPlaceholder provided={provided} />
            </div>
          )}
        </Droppable>
      )}
    </div>
  );
};

export default Stock;
