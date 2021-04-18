import cx from 'classnames';
import React from 'react';

import { Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

import Card from '../Card';
import DragPlaceholder from '../DragPlaceholder';

import { ranks } from '../../../utils';

import * as styles from './Build.module.scss';

const Build = () => {
  const { cardBuild } = useSelector(({ state }) => state);

  const getTopCard = (card, provided, snapshot) => (
    <Card
      className={cx(styles.card)}
      provided={provided}
      rank={card.rank}
      snapshot={snapshot}
      suit={card.suit}
      value={card.value}
    />
  );

  const isAllowed = (snapshot, build) => {
    const buildPosition = cardBuild[build].length || 0;
    const dragRank = snapshot.draggingOverWith?.split('|')[2];

    if (
      dragRank === ranks[buildPosition] ||
      dragRank === ranks[ranks.length - 1]
    ) {
      return true;
    }
    return;
  };

  return (
    <div className={cx(styles.root)}>
      {Object.keys(cardBuild).map(build => (
        <Droppable droppableId={`build${build}`} key={build}>
          {(provided, snapshot) => (
            <div
              className={cx(styles.column, {
                [styles.active]:
                  snapshot.isDraggingOver && isAllowed(snapshot, build),
                [styles.error]:
                  snapshot.isDraggingOver && !isAllowed(snapshot, build),
              })}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {cardBuild[build].length === 0 && (
                <Card
                  className={cx(styles.empty)}
                  placeholder={'A'}
                  provided={provided}
                  snapshot={snapshot}
                />
              )}

              {cardBuild[build].length > 0 &&
                getTopCard(
                  cardBuild[build][cardBuild[build].length - 1],
                  provided,
                  snapshot
                )}
              <DragPlaceholder provided={provided} />
            </div>
          )}
        </Droppable>
      ))}
    </div>
  );
};

export default Build;
