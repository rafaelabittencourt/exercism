export function twoSum(array1, array2) {
  let juntar1 = array1.join('');
  let juntar2 = array2.join('');
  let soma = Number(juntar1) + Number(juntar2);
  return soma;
}

export function luckyNumber(value) {
  let arr = String(value).split('');
  let reverso = arr.reverse();
  let str = reverso.join('');
  if (String(value) === str) {
    return true;
  } else {
    return false;
  }
}

export function errorMessage(input) {
  if (!input && input != 0 || input == '') {
    return 'Required field';
  }
  else if (!Number(input)) {
    return 'Must be a number besides 0';
  } else {
    return '';
  }
}
