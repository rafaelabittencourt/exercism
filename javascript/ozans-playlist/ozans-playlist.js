export function removeDuplicates(playlist) {
  return [...new Set(playlist)];
}

export function hasTrack(playlist, track) {
  let mySet = new Set(playlist);
  return mySet.has(track);
}

export function addTrack(playlist, track) {
  let mySet = new Set(playlist);
  let newSet = mySet.add(track);
  return [...newSet];
}

export function deleteTrack(playlist, track) {
  let mySet = new Set(playlist);
  let inPlaylist = mySet.delete(track);
  return [...mySet];
}

export function listArtists(playlist) {
  const newArr = playlist.map(song => song.split(' - ')[1]);
  /* outra maneira de fazer, com for...of:
  const newArr = [];
  for (let song of playlist) {
    newArr.push(song.split(' - ')[1]); 
  }
  */
  return [...new Set(newArr)];
}
