// Problem 1

function formatValue(value: number | string | boolean) {
  if (typeof value === "number") {
    value = value * 10;
  } else if (typeof value === "string") {
    value = value.toUpperCase();
  } else {
    return !value;
  }
  return value;
}

// Problem 2

function getLength(value: string | any[]) {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }
}

