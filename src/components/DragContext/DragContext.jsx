import React from 'react';

import { DragDropContext } from 'react-beautiful-dnd';

import { useSelector, useDispatch } from 'react-redux';
import {
  setCardBuild,
  setCardHand,
  setCardHold,
  setCardStock,
  setDragging,
} from '../../state/actions';
import { ranks, reorder, DraggbleTypes } from '../../../utils';

const DragContext = ({ children }) => {
  const { cardBuild, cardHand, cardHold, cardStock } = useSelector(
    ({ state }) => state
  );
  const dispatch = useDispatch();

  const onDragStart = start => {
    dispatch(setDragging(start.source));
  };

  const onDragEnd = e => {
    dispatch(setDragging({}));

    const { destination, source } = e;
    if (!destination) {
      return;
    }

    const { droppableId: dropId } = destination;
    const { droppableId: sourceId } = source;

    switch (dropId) {
      case DraggbleTypes.HAND:
        if (sourceId === DraggbleTypes.HAND) {
          const newHand = reorder(cardHand, source.index, destination.index);

          dispatch(setCardHand(newHand));
        }
        return;
      case DraggbleTypes.HOLD0:
      case DraggbleTypes.HOLD1:
      case DraggbleTypes.HOLD2:
      case DraggbleTypes.HOLD3:
        const holdIndex = parseInt(dropId.slice(-1)[0]);
        const newHold = { ...cardHold };
        const newHoldHand = [...cardHand];

        if (sourceId === DraggbleTypes.HAND) {
          newHold[holdIndex].push(newHoldHand.splice(source.index, 1)[0]);
          dispatch(setCardHand(newHoldHand));
          dispatch(setCardHold(newHold));
        }

        return;
      case DraggbleTypes.BUILD0:
      case DraggbleTypes.BUILD1:
      case DraggbleTypes.BUILD2:
      case DraggbleTypes.BUILD3:
        const buildIndex = parseInt(dropId.slice(-1)[0]);
        const newBuild = { ...cardBuild };
        const newBuildHand = [...cardHand];
        const newBuildStock = [...cardStock];
        const newBuildHold = { ...cardHold };
        let sourceCard;

        //starter card
        const buildPosition = newBuild[buildIndex].length || 0;

        const isNextCard = checkCard => checkCard.rank === ranks[buildPosition];

        if (sourceId === DraggbleTypes.HAND) {
          sourceCard = newBuildHand[source.index];

          if (isNextCard(sourceCard)) {
            newBuild[buildIndex].push(newBuildHand.splice(source.index, 1)[0]);

            dispatch(setCardHand(newBuildHand));
            dispatch(setCardBuild(newBuild));
          }
        }

        if (sourceId === DraggbleTypes.STOCK) {
          sourceCard = newBuildStock[source.index];

          if (isNextCard(sourceCard)) {
            newBuild[buildIndex].push(newBuildStock.splice(source.index, 1)[0]);

            dispatch(setCardStock(newBuildStock));
            dispatch(setCardBuild(newBuild));
          }
        }

        if (sourceId.indexOf('hold') === 0) {
          const holdIndex = parseInt(sourceId.slice(-1)[0]);

          sourceCard = newBuildHold[holdIndex][source.index];

          if (isNextCard(sourceCard)) {
            newBuild[buildIndex].push(
              newBuildHold[holdIndex].splice(source.index, 1)[0]
            );
            dispatch(setCardBuild(newBuild));
            dispatch(setCardHold(newBuildHold));
          }
        }

        return;

      default:
        return;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      {children}
    </DragDropContext>
  );
};

export default DragContext;
