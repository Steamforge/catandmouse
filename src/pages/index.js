import React, { useEffect } from 'react';
import { shuffle } from 'lodash';
import { useDispatch } from 'react-redux';

import { SET_CARD_DRAW, SET_CARD_STOCK } from '../state/constants';
import { setAction } from '../state/actions';

import { deck } from '../../utils';

import Build from '../components/Build';
import DragContext from '../components/DragContext';
import Draw from '../components/Draw';
import Hand from '../components/Hand';
import Hold from '../components/Hold';
import Layout from '../components/layout';
import Row from '../components/Row';
import Stock from '../components/Stock';

const STOCK_SIZE = 20;
const DECK_SIZE = 2;

const IndexPage = () => {
  const dispatch = useDispatch();

  const newDeck = num => shuffle(deck(num));

  useEffect(() => {
    //create new draw deck
    const newDraw = newDeck(DECK_SIZE);
    dispatch(setAction(SET_CARD_DRAW, newDraw));

    //deal stock cards
    const newStock = [...Array(STOCK_SIZE)].map(() => newDraw.pop());
    dispatch(setAction(SET_CARD_STOCK, newStock));
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
