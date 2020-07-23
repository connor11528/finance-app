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
