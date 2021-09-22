export function getFirstCard(deck) {
  const [firstCard] = deck; // mesma coisa que: const firstCard = deck[0];
  return firstCard;
}

export function getSecondCard(deck) {
  const [firstCard, secondCard] = deck;
  return secondCard;
}

export function swapTopTwoCards(deck) {
  const [firstCard, secondCard, ...rest] = deck;
  deck = [secondCard, firstCard, ...rest];
  return deck;
}

export function discardTopCard(deck) {
  const [firstCard, ...rest] = deck;
  deck = [firstCard, [...rest]];
  return deck;
}

export function insertFaceCards(deck) {
  const [firstCard, ...rest] = deck;
  deck = [firstCard, 'jack', 'queen', 'king', ...rest];
  return deck;
}
