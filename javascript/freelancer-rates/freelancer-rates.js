export function dayRate(ratePerHour) {
  return ratePerHour*8;
}

export function monthRate(ratePerHour, discount) {
  return Math.ceil((ratePerHour*176) - (ratePerHour*176)*discount);
}

export function daysInBudget(budget, ratePerHour, discount) {
  let valorDiaComDesconto = Math.ceil((ratePerHour*176*(1 - discount)) / 22)
  return Math.floor(budget/valorDiaComDesconto);
}


