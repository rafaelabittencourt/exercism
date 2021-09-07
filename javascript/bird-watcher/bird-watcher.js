export function totalBirdCount(birdsPerDay) {
 let total = 0;
 for (let i = 0; i < birdsPerDay.length; i++) {
   total += birdsPerDay[i];
 }
 return total;
}

export function birdsInWeek(birdsPerDay, week) {
 let total = 0;
 for (let i = 0; i < birdsPerDay.length; i++) {
  if (i < week * 7 && i + 1 > (week - 1) * 7) {
    total += birdsPerDay[i];
  }
 }
 return total;
}

export function fixBirdCountLog(birdsPerDay) {
 for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i]++;
  } 
  return birdsPerDay;
}
