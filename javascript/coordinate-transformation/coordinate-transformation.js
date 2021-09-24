export function translate2d(dx, dy) {
  return (x, y) => [x + dx, y + dy]; 
  // simplificação de: 
  // const moveCoordinatesRight = (x, y) => [x + dx, y + dy]; return moveCoordinatesRight;
  // OU 
  // function moveCoordinatesRight(x, y) { [x + dx, y + dy] }; return moveCoordinatesRight;
}

export function scale2d(sx, sy) {
  return (x, y) => [x * sx, y * sy]; 
  // esta função também está simplificada, mesma coisa do primeiro caso.
}

export function composeTransform(f, g) {
  return (x, y) => g(...f(x, y)); 
  // simplificação usando spread de:
  // const [x1, y1] = f(x, y); return g(x1, y1); - vide: desestruturação de array
}

export function memoizeTransform(f) {
  var xAntigo = undefined, yAntigo = undefined; 
  var resultadoAntigo;
  // ou let x1, y1...
  return function(x, y) {
    if (x === xAntigo && y === yAntigo) {
      return resultadoAntigo;
    } else {
    xAntigo = x;
    yAntigo = y;
    resultadoAntigo = f(x, y);
    return resultadoAntigo;
    }
  }
}
