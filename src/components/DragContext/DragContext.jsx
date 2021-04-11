import React from 'react';

import { DragDropContext } from 'react-beautiful-dnd';

import { useSelector, useDispatch } from 'react-redux';
import { setCardHand, setCardHold } from '../../state/actions';

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const DragContext = ({ children }) => {
  const cardHand = useSelector(({ state }) => state.cardHand);
  const cardHold = useSelector(({ state }) => state.cardHold);
  const dispatch = useDispatch();

  const onDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }

    const { droppableId } = destination;

    switch (droppableId) {
      case 'hand':
        let newHand = reorder(cardHand, source.index, destination.index);

        dispatch(setCardHand(newHand));
        return;
      case 'hold0':
      case 'hold1':
      case 'hold2':
      case 'hold3':
        const holdIndex = parseInt(droppableId.slice(-1));
        let newHoldHand = [...cardHand];
        let newHold = { ...cardHold };
        newHold[holdIndex].push(newHoldHand.splice(source.index, 1)[0]);

        dispatch(setCardHand(newHoldHand));
        dispatch(setCardHold(newHold));
        return;
      default:
        return;
    }
  };

  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
};

export default DragContext;
