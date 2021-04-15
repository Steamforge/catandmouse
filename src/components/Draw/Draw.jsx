import cx from 'classnames';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCardDraw, setCardHand } from '../../state/actions';

import Stack from '../Stack';

import * as styles from './Draw.module.scss';

const HAND_SIZE = 5;

const Draw = () => {
  const { cardDraw, cardHand } = useSelector(({ state }) => state);
  const dispatch = useDispatch();

  const drawCount = cardDraw.length;

  const playCard = () => {
    if (drawCount > 0 && cardHand.length < HAND_SIZE) {
      const newDraw = [...cardDraw];
      const newHand = [...cardHand];

      for (let i = 0; i < HAND_SIZE - cardHand.length; i++) {
        newHand.push(newDraw.pop());
      }

      dispatch(setCardHand(newHand));
      dispatch(setCardDraw(newDraw));
    }
  };

  return (
    <div>
      <div className={cx(styles.count)}>{drawCount}</div>
      <Stack
        className={cx(styles.root)}
        count={drawCount}
        onClick={() => playCard()}
      />
    </div>
  );
};

export default Draw;