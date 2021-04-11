import cx from 'classnames';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCardDraw, setCardHand } from '../../state/actions';

import Card from '../Card';

import * as styles from './Stack.module.scss';

const HAND_SIZE = 5;

const Stack = () => {
  const cardDraw = useSelector(({ state }) => state.cardDraw);
  const cardHand = useSelector(({ state }) => state.cardHand);
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

  const getCardBack = () => <Card back className={cx(styles.card)} />;

  return (
    <div>
      <div className={cx(styles.count)}>{drawCount}</div>
      <div className={cx(styles.root)} onClick={() => playCard()}>
        {drawCount >= 1 && getCardBack()}
        {drawCount >= 2 && getCardBack()}
        {drawCount >= 3 && getCardBack()}
        {drawCount === 0 && <Card className={cx(styles.empty)} />}
      </div>
    </div>
  );
};

export default Stack;
