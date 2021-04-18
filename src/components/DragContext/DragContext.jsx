import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { cloneDeep, shuffle } from 'lodash';
import { DragDropContext } from 'react-beautiful-dnd';

import {
  SET_CARD_BUILD,
  SET_CARD_DRAW,
  SET_CARD_HAND,
  SET_CARD_HOLD,
  SET_CARD_STOCK,
  SET_DRAGGING,
} from '../../state/constants';

import { DraggbleTypes, ranks, reorder } from '../../../utils';
import { setAction } from '../../state/actions';

const DragContext = ({ children }) => {
  const store = useSelector(({ state }) => state);
  const dispatch = useDispatch();

  const dispatchAction = (type, payload) => {
    dispatch(setAction(type, payload));
  };

  const onDragStart = start => {
    dispatchAction(SET_DRAGGING, start.source);
  };

  const onDragEnd = end => {
    dispatchAction(SET_DRAGGING, {});

    const { destination, source } = end;
    if (!destination) {
      return;
    }

    const { droppableId: dropId } = destination;
    const { droppableId: sourceId } = source;

    const checkBuild = build => {
      const tempBuild = cloneDeep(build);
      let tempDraw = cloneDeep(store.cardDraw);
      let tempDiscard = [];

      Object.keys(tempBuild).forEach(key => {
        if (tempBuild[key].length === 12) {
          const cardsToDiscard = cloneDeep(tempBuild[key]);

          const cleanDiscard = cardsToDiscard.map(({ rank, suit }) => ({
            rank,
            suit,
            value: rank,
          }));
          tempBuild[key].length = 0;
          tempDiscard = [...tempDiscard, ...cleanDiscard];
        }
      });

      tempDraw = [...tempDraw, ...shuffle(tempDiscard)];

      if (tempDiscard.length > 0) {
        dispatchAction(SET_CARD_BUILD, tempBuild);
        dispatchAction(SET_CARD_DRAW, tempDraw);
      }
    };

    switch (dropId) {
      case DraggbleTypes.HAND:
        if (sourceId === DraggbleTypes.HAND) {
          const newHand = reorder(
            store.cardHand,
            source.index,
            destination.index
          );

          dispatchAction(SET_CARD_HAND, newHand);
        }
        break;
      case DraggbleTypes.HOLD0:
      case DraggbleTypes.HOLD1:
      case DraggbleTypes.HOLD2:
      case DraggbleTypes.HOLD3:
        const holdIndex = parseInt(dropId.slice(-1)[0]);
        const newHold = cloneDeep(store.cardHold);
        const newHoldHand = cloneDeep(store.cardHand);

        if (sourceId === DraggbleTypes.HAND) {
          newHold[holdIndex].push(newHoldHand.splice(source.index, 1)[0]);

          dispatchAction(SET_CARD_HAND, newHoldHand);
          dispatchAction(SET_CARD_HOLD, newHold);
        }

        break;
      case DraggbleTypes.BUILD0:
      case DraggbleTypes.BUILD1:
      case DraggbleTypes.BUILD2:
      case DraggbleTypes.BUILD3:
        const buildIndex = parseInt(dropId.slice(-1)[0]);
        const newBuild = cloneDeep(store.cardBuild);
        const newBuildHand = cloneDeep(store.cardHand);
        const newBuildStock = cloneDeep(store.cardStock);
        const newBuildHold = cloneDeep(store.cardHold);
        let sourceCard;
        let movedCard;

        //starter card
        const buildPosition = newBuild[buildIndex].length || 0;

        const isNextCard = checkCard =>
          checkCard.rank === ranks[buildPosition] ||
          checkCard.rank === ranks[ranks.length - 1];

        //move from hand
        if (sourceId === DraggbleTypes.HAND) {
          sourceCard = newBuildHand[source.index];

          if (isNextCard(sourceCard)) {
            movedCard = newBuildHand.splice(source.index, 1)[0];
            movedCard.value = ranks[buildPosition];
            newBuild[buildIndex].push(movedCard);

            dispatchAction(SET_CARD_HAND, newBuildHand);
            dispatchAction(SET_CARD_BUILD, newBuild);
          }
        }

        //move from stock
        if (sourceId === DraggbleTypes.STOCK) {
          sourceCard = newBuildStock[source.index];

          if (isNextCard(sourceCard)) {
            movedCard = newBuildStock.splice(source.index, 1)[0];
            movedCard.value = ranks[buildPosition];
            newBuild[buildIndex].push(movedCard);

            dispatchAction(SET_CARD_STOCK, newBuildStock);
            dispatchAction(SET_CARD_BUILD, newBuild);
          }
        }

        //move from hold
        if (sourceId.indexOf('hold') === 0) {
          const holdIndex = parseInt(sourceId.slice(-1)[0]);

          sourceCard = newBuildHold[holdIndex][source.index];

          if (isNextCard(sourceCard)) {
            movedCard = newBuildHold[holdIndex].splice(source.index, 1)[0];
            movedCard.value = ranks[buildPosition];

            newBuild[buildIndex].push(movedCard);

            dispatchAction(SET_CARD_BUILD, newBuild);
            dispatchAction(SET_CARD_HOLD, newBuildHold);
          }
        }

        checkBuild(newBuild);

        break;

      default:
        break;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      {children}
    </DragDropContext>
  );
};

export default DragContext;
