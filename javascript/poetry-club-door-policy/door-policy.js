
export function frontDoorResponse(blurb) {
  return blurb.charAt(0);
}

export function backDoorResponse(blurb) {
  const semEspacos = blurb.trim();
  return semEspacos.charAt(semEspacos.length - 1);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function frontDoorPassword(responses) {
  return capitalize(responses);
}

export function backDoorPassword(responses) {
  return capitalize(responses) + ", please";
}
