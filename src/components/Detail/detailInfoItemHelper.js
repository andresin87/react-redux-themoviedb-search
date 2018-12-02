const getNamesOfArray = array => {
  return array
    .reduce((namesOfArray, item) => {
      return item.name ? `${namesOfArray} ${item.name},` : '';
    }, '')
    .slice(0, -1);
};

const getDateWithDDMMYYYFormat = date => {
  var pattern = /(\d{4})-(\d{2})-(\d{2})/;
  if (!date || !date.match(pattern)) {
    return null;
  }
  return date.replace(pattern, '$3/$2/$1');
};

export const getItemContent = item => {
  const { type, value } = item;

  switch (type) {
    case 'array':
      return `${value && value.length ? getNamesOfArray(value) : ''}`;
    case 'currency':
      return `${value ? value.toLocaleString() + '$' : ''}`;
    case 'date':
      return `${value ? getDateWithDDMMYYYFormat(value) : ''}`;
    case 'number':
      return `${value ? value.toLocaleString() : ''}`;
    case 'time':
      return `${value ? value + ' min.' : ''}`;
    case 'text':
    default:
      return `${value ? value : ''}`;
  }
};
