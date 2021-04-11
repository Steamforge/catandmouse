import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setCardDraw } from '../state/actions';

import { deck, shuffle } from '../../utils';

import DragContext from '../components/DragContext';
import Layout from '../components/layout';
import Stack from '../components/Stack';
import Hand from '../components/Hand';
import Hold from '../components/Hold';
import Row from '../components/Row';

const IndexPage = () => {
  const dispatch = useDispatch();

  const newDeck = () => shuffle(deck());

  useEffect(() => {
    dispatch(setCardDraw(newDeck()));
  }, [dispatch]);

  return (
    <DragContext>
      <Layout pagetitle="cat and mouse">
        <Row>
          <Stack />
          <Hand />
          <Hold />
        </Row>
      </Layout>
    </DragContext>
  );
};

export default IndexPage;
