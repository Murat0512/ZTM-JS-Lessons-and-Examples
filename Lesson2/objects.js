
var user = {
  name: "john",
  age: 30,
  married: false,
  hobbies: ["reading", "traveling", "cooking"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  shout: function () {
    console.log("Hello!");
  },
};

console.log(user);
console.log(user.hobbies[1]);

console.log(user.address.country);

user.shout();  // This is a method of user object, it will print "Hello!" when called.
