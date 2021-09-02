export function canExecuteFastAttack(knightIsAwake) {
  if (knightIsAwake) {
    return false;
  }
  if (!knightIsAwake) {
    return true;
  };
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
    return true;
  }
  if (!knightIsAwake && !archerIsAwake && !prisonerIsAwake) {
    return false;
  };
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (!archerIsAwake && prisonerIsAwake) {
    return true;
  }
  else {
    return false;
  }
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if(!archerIsAwake && (petDogIsPresent || prisonerIsAwake) && (!knightIsAwake || petDogIsPresent)) {
    return true;
  }
  else {
    return false;
  }
}
