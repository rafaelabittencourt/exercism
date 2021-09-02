export const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function getItem(cards, position) {
  return cards[position];
}

export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}

export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

export function checkSizeOfStack(cards, stackSize) {
  if (stackSize === cards.length) {
    return true;
  }
  else {
    return false;
  };
}
