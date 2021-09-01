export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
  return (EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven);
}

export function preparationTimeInMinutes(numberOfLayers) {
  const PREPARATION_MINUTES_PER_LAYER = 2;
  return (PREPARATION_MINUTES_PER_LAYER * numberOfLayers);
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return actualMinutesInOven + preparationTimeInMinutes(numberOfLayers);
}
