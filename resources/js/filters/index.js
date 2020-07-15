import moment from 'moment';

/**
 * Transaction Group Date Formatter
 *
 * @param  string date Timestamp
 * @return string moment()
 */
export function groupDate(date) {
  const today = moment();
  const yesterday = moment().subtract(1, 'day');
  const theMoment = moment(date);

  if (theMoment.isSame(today, 'day')) {
    return 'Today';
  } else if (theMoment.isSame(yesterday, 'day')) {
    return 'Yesterday'
  } else {
    return theMoment.format('ddd, D MMMM')
  }
}

/**
 * Transaction Date Formatter
 *
 * @param  string date Timestamp
 * @return string moment()
 */
export function transactionDate(date) {
  const theMoment = moment(date).local();

  return theMoment.format('D MMMM, YYYY') + ' at ' + theMoment.format('h:mm A');
}

/**
* Currency Formatter
*
* @param  number value
* @return string
*/
export function prettyCurrency(amount) {
  const sign = Math.sign(amount);
  const isPositive = (sign === 0 || sign === 1);

  let segments = amount.toString().split('.');
  return `$${segments[0]}.<span>${segments[1]}</span>`;
}
