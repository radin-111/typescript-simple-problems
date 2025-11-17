// Problem 1

const formatValue = (value: number | string | boolean):number | string | boolean => {
  if (typeof value === "number") {
    value = value * 10;
  } else if (typeof value === "string") {
    value = value.toUpperCase();
  } else {
    return !value;
  }
  return value;
};

// Problem 2

const getLength = (value: string | any[]):number => {
  let size: number = 0;
  if (typeof value === "string") {
    size = value.length;
  }

  if (Array.isArray(value)) {
    size = value.length;
  }

  return size;
};

// Problem 4
 
const filterByRating = (
  arr: Array<{ title: string; rating: number }>
): Array<object> => {
  const filteredArray = arr.filter(
    (item: { title: string; rating: number }) => item.rating >= 4
  );
  return filteredArray;
};

