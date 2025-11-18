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

class Person {
  name: string;
  age: number;
  constructor(fullName: string, givenAge: number) {
    this.name = fullName;
    this.age = givenAge;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const filterByRating = (
  arr: Array<{ title: string; rating: number }>
): Array<{ title: string; rating: number }> => {
  const filteredArray = arr.filter(
    (item: { title: string; rating: number }) => item.rating >= 4
  );
  return filteredArray;
};

const filterActiveUsers = (
  arr: Array<{
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }>
): Array<{
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}> => {
  let activeUsers = arr.filter(
    (user: { id: number; name: string; email: string; isActive: boolean }) =>
      user.isActive === true
  );
  return activeUsers;
};

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

const calculateTotalPrice = (
  arr: Array<{
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }>
): number => {
  let totalPrice: number = arr.reduce((sum, item) => {
    let { price, quantity, discount } = item;
    let subtotal: number = price * quantity;
    if (discount) {
      const discountedPrice: number = subtotal * (discount / 100);
      subtotal = subtotal - discountedPrice;
    }
    return sum + subtotal;
  }, 0);

  return totalPrice;
};
