import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setCardDraw, setCardStock } from '../state/actions';

import { deck, shuffle } from '../../utils';

import Build from '../components/Build';
import DragContext from '../components/DragContext';
import Draw from '../components/Draw';
import Hand from '../components/Hand';
import Hold from '../components/Hold';
import Layout from '../components/layout';
import Row from '../components/Row';
import Stock from '../components/Stock';

const STOCK_SIZE = 10;

const IndexPage = () => {
  const dispatch = useDispatch();

  const newDeck = () => shuffle(deck());

  useEffect(() => {
    const newDraw = newDeck();
    const newStock = [];

    for (let i = 0; i < STOCK_SIZE; i++) {
      newStock.push(newDraw.pop());
    }

    dispatch(setCardDraw(newDraw));
    dispatch(setCardStock(newStock));
  }, [dispatch]);

  return (
    <DragContext>
      <Layout pagetitle="cat and mouse">
        <Row>
          <Draw />
          <Build />
        </Row>
        <Row>
          <Stock />
          <Hand />
          <Hold />
        </Row>
      </Layout>
    </DragContext>
  );
};

export default IndexPage;
