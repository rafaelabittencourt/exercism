export function cardTypeCheck(stack, cardType) {
  let nCards = 0;
  stack.forEach(function(card) {
    if (card === cardType) return nCards++;
  })
  return nCards; 
  /* versão com arrow function/simplificada:
  let nCards = 0;
  stack.forEach((card) => { if (card === cardType) return nCards++; })
  return nCards; */
}

export function determineOddEvenCards(stack, type) {
  let nCards = 0;
  if (type) {
    for (let card of stack) {
      if (card % 2 === 0) nCards++;
    }
  return nCards;
  }
  if (!type) {
    for (let card of stack) {
      if (card % 2 !== 0) nCards++;
    }
  return nCards;
  }
}
