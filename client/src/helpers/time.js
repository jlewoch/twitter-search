export const getTimeSpan = passedDate => {
  // get milliseconds for passed date
  const dateFrom = Date.parse(passedDate);
  const dateTo = Date.now();
  // evaluate the span between
  const timelaps = dateTo - dateFrom;
  // time frames based on the amount of time left in timelaps
  const years = Math.floor(timelaps / 31556952000);
  const months = Math.floor(timelaps / 2629746000);
  const days = Math.floor(timelaps / 86400000);
  const hours = Math.floor(timelaps / 3600000);
  const minutes = Math.floor(timelaps / 60000);
  const seconds = Math.floor(timelaps / 1000);
  // place timeframe values in array
  const arr = [years, months, days, hours, minutes, seconds];
  // array of labels in same order as each time frame
  let intervalname = ['year', 'month', 'day', 'hour', 'minute', 'second'];
  // set initial value
  let value = 0;
  // loop through time frames array
  for (let i = 0; i < arr.length; i++) {
    // check if the value is greater than 0
    if (arr[i] > 0) {
      // set value to the time frame
      value = arr[i];
      // if the value is greater than 1 add an s to the end of the string
      if (value > 1) {
        intervalname = intervalname[i] + 's';
      } else {
        intervalname = intervalname[i];
      }
      // break loop beacause time span was found
      break;
    }
  }
  // value not altered date date provided is less than 1 second return just now label
  if (value === 0) {
    return 'Just Now';
  } else {
    // return formated text with value and interval name
    return `${value} ${intervalname} ago`;
  }
};
export const getShortMonthDay = passedDate => {
  // initialize date Object
  const date = new Date(Date.parse(passedDate));
  // set options
  const options = {
    month: 'short',
    day: 'numeric'
  };
  // return formated string
  return date.toLocaleDateString('en', options);
};
