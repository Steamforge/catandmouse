import { cloneDeep } from 'lodash';

export const DraggbleTypes = {
  HAND: 'hand',
  HOLD0: 'hold0',
  HOLD1: 'hold1',
  HOLD2: 'hold2',
  HOLD3: 'hold3',
  BUILD0: 'build0',
  BUILD1: 'build1',
  BUILD2: 'build2',
  BUILD3: 'build3',
  STOCK: 'stock',
};

export const ranks = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

const suits = ['heart', 'diamond', 'spade', 'club'];

//creates deck(s) of cards
export const deck = (num = 1) => {
  if (num === 0) {
    num = 1;
  }

  return [...Array(num)]
    .map(() =>
      suits.map(suit => ranks.map(rank => ({ rank, suit, value: rank })))
    )
    .flat(2);
};

//Fisher-Yates
export const shuffle = array => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

//reorder an array
export const reorder = (list, startIndex, endIndex) => {
  const result = cloneDeep(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed)[0];

  return result;
};
