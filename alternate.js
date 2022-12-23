// exporting directing into exports object
module.exports.items = [1, 2, 3, 4, 5];

const person = {
  firstName: "Bob",
  lastName: "Smith",
};

// exporting using a custom property name and
// setting it's value to a variable
module.exports.bob = person;
