// Problem 1
var formatValue = function (value) {
    if (typeof value === "number") {
        value = value * 10;
    }
    else if (typeof value === "string") {
        value = value.toUpperCase();
    }
    else {
        return !value;
    }
    return value;
};
// Problem 2
var getLength = function (value) {
    var size = 0;
    if (typeof value === "string") {
        size = value.length;
    }
    if (Array.isArray(value)) {
        size = value.length;
    }
    return size;
};
// Problem 3
var Person = /** @class */ (function () {
    function Person(fullName, givenAge) {
        this.name = fullName;
        this.age = givenAge;
    }
    Person.prototype.getDetails = function () {
        return "'Name: ".concat(this.name, ", Age: ").concat(this.age, "'");
    };
    return Person;
}());
// Problem 4
var filterByRating = function (arr) {
    var filteredArray = arr.filter(function (item) { return item.rating >= 4; });
    return filteredArray;
};
// Problem 5
var filterActiveUsers = function (arr) {
    var activeUsers = arr.filter(function (user) {
        return user.isActive === true;
    });
    return activeUsers;
};
var printBookDetails = function (info) {
    var author = info.author, isAvailable = info.isAvailable, publishedYear = info.publishedYear, title = info.title;
    console.log("Title: ".concat(title, ", Author: ").concat(author, ", Published: ").concat(publishedYear, ", Available: ").concat(isAvailable ? "Yes" : "No"));
};
// Problem 7
var getUniqueValues = function (value1, value2) {
    var uniqueArray = [];
    for (var i = 0; i < value1.length; i++) {
        if (!uniqueArray.includes(value1[i])) {
            uniqueArray.push(value1[i]);
        }
    }
    for (var i = 0; i < value2.length; i++) {
        if (!uniqueArray.includes(value1[i])) {
            uniqueArray.push(value2[i]);
        }
    }
    return uniqueArray;
};
// Problem 8
var calculateTotalPrice = function (arr) {
    var totalPrice = arr.reduce(function (sum, item) {
        var price = item.price, quantity = item.quantity, discount = item.discount;
        var subtotal = price * quantity;
        if (discount) {
            var discountedPrice = subtotal * (discount / 100);
            subtotal = subtotal - discountedPrice;
        }
        return sum + subtotal;
    }, 0);
    return totalPrice;
};
console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));
console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));
var person1 = new Person("John Doe", 30);
console.log(person1.getDetails());
var person2 = new Person("Alice", 25);
console.log(person2.getDetails());
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(books));
var users = [
    { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
    { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
    { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];
console.log(filterActiveUsers(users));
var myBook = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    isAvailable: true,
};
printBookDetails(myBook);
var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
var products = [
    { name: "Pen", price: 10, quantity: 2 },
    { name: "Notebook", price: 25, quantity: 3, discount: 10 },
    { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
console.log(calculateTotalPrice(products));
