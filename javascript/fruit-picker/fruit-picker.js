import { checkStatus, checkInventory } from './grocer';

export function isServiceOnline() {
 return checkStatus((status) => status === 'ONLINE');
 /* simplificação de:
 return checkStatus(function callback(status) {
  return (status === 'ONLINE');
 }) */
}

export function pickFruit(variety, quantity, callback) {
  const query = {variety, quantity};
  return checkInventory(query, callback);
}

export function purchaseInventoryIfAvailable(err, isAvailable) {
  if (!(err === null)) {
    return error;
  } else if (isAvailable) {
    return 'PURCHASE';
  } else {
    return 'NOOP';
  }
}

export function pickAndPurchaseFruit(variety, quantity) {
  const query = {variety, quantity};
  return checkInventory(query, purchaseInventoryIfAvailable);
}
