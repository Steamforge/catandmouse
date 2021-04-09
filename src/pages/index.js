import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCardDraw, setCardHand } from '../state/actions';

import { deck, shuffle } from '../../utils';

import Layout from '../components/layout';
import Stack from '../components/Stack';
import Hand from '../components/Hand';

const IndexPage = () => {
  const cardDraw = useSelector(({ state }) => state.cardDraw);
  const cardHand = useSelector(({ state }) => state.cardHand);
  const dispatch = useDispatch();

  const HAND_SIZE = 5;

  useEffect(() => {
    dispatch(setCardDraw(shuffle(deck())));
  }, [dispatch]);

  const playCard = () => {
    if (cardDraw.length > 0) {
      const newDraw = [...cardDraw];
      const newHand = [...cardHand];

      if (newHand.length < HAND_SIZE) {
        for (let i = 0; i < HAND_SIZE; i++) {
          newHand.push(newDraw.pop());
        }

        dispatch(setCardHand(newHand));
        dispatch(setCardDraw(newDraw));
      }
    }
  };

  return (
    <Layout pagetitle="cat and mouse">
      <Stack count={cardDraw.length} onClick={() => playCard()} />
      <Hand cards={cardHand} />
    </Layout>
  );
};

export default IndexPage;
