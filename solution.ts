// Problem 1

const formatValue = (
  value: number | string | boolean
): number | string | boolean => {
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

const getLength = (value: string | any[]): number => {
  let size: number = 0;
  if (typeof value === "string") {
    size = value.length;
  }

  if (Array.isArray(value)) {
    size = value.length;
  }

  return size;
};

// Problem 3
class Person {
  name: string;
  age: number;
  constructor(fullName: string, givenAge: number) {
    this.name = fullName;
    this.age = givenAge;
  }

  getDetails(){
    return `'Name: ${this.name}, Age: ${this.age}'`
  }
}

// Problem 4

const filterByRating = (
  arr: Array<{ title: string; rating: number }>
): Array<object> => {
  const filteredArray = arr.filter(
    (item: { title: string; rating: number }) => item.rating >= 4
  );
  return filteredArray;
};

// Problem 5

const filterActiveUsers = (
  arr: Array<{
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }>
): Array<object> => {
  let activeUsers = arr.filter(
    (user: { id: number; name: string; email: string; isActive: boolean }) =>
      user.isActive === true
  );
  return activeUsers;
};

// Problem 6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (info: Book) => {
  const { author, isAvailable, publishedYear, title } = info;
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? "Yes" : "No"
    }`
  );
};

// Problem 7

const getUniqueValues = (value1: any[], value2: any[]): any[] => {
  let uniqueArray: any[] = [];

  for (let i = 0; i < value1.length; i++) {
    if (!uniqueArray.includes(value1[i])) {
      uniqueArray.push(value1[i]);
    }
  }
  for (let i = 0; i < value2.length; i++) {
    if (!uniqueArray.includes(value2[i])) {
      uniqueArray.push(value2[i]);
    }
  }
  return uniqueArray;
};

// Problem 8

const calculateTotalPrice = (
  arr: Array<{
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }>
) => {};

