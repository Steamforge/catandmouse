import React, { useEffect, useState } from 'react';

import { deck, shuffle } from '../../utils';

// import Card from '../components/Card';
import Layout from '../components/layout';
import Stack from '../components/Stack';
import Hand from '../components/Hand';

const IndexPage = () => {
  const [cardDraw, setCardDraw] = useState([]);
  // const [cardDiscard, setCardDiscard] = useState([]);
  const [cardHand, setCardHand] = useState([]);

  useEffect(() => {
    const newDeck = deck();
    setCardDraw(shuffle(newDeck));
  }, []);

  const playCard = () => {
    if (cardDraw.length > 0) {
      const newDraw = [...cardDraw];
      const newHand = [...cardHand];

      if (newHand.length < 5) {
        for (let i = 0; i < 5; i++) {
          let removed = newDraw.pop();
          newHand.push(removed);
        }
      }

      setCardHand(newHand);
      setCardDraw(newDraw);
    }
  };

  return (
    <Layout pagetitle="skip">
      <Stack count={cardDraw.length} onClick={() => playCard()} />
      <Hand cards={cardHand} />
    </Layout>
  );
};

export default IndexPage;
