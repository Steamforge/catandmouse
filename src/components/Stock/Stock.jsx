import cx from 'classnames';
import React from 'react';

import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

import DragPlaceholder from '../DragPlaceholder';
import Stack from '../Stack';

import { DraggbleTypes } from '../../../utils';

import * as styles from './Stock.module.scss';

const Stock = () => {
  const cardStock = useSelector(({ state }) => state.cardStock);

  const topCard = cardStock.slice(-1)[0];
  const stockCount = cardStock.length;

  return (
    <div>
      <div className={cx(styles.count)}>{stockCount}</div>
      <Droppable droppableId={DraggbleTypes.STOCK} isDropDisabled={true}>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Stack
              className={cx(styles.root)}
              count={stockCount}
              provided={provided}
              source={DraggbleTypes.STOCK}
              topCard={topCard}
            />
            <DragPlaceholder provided={provided} />
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Stock;
