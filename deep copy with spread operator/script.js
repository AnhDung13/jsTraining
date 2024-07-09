const person = {
  name: "John",
  age: 30,
  address: {
    city: "new york",
    country: "USA",
    district: {
      temp1: [1, 2],
      temp2: {
        tempA: "abc",
        tempB: 123,
      },
    },
  },
  hello: null,
  hobbies: ["dance", "swim", { game: 1, soccer: "striker" }],
  getName: function () {
    console.log(this.name);
  },
};
const newPerson = deepCopy(person);
newPerson.name = "Kel";
newPerson.hobbies[2].game = 2;
newPerson.address.district.temp2.tempA = 456;
newPerson.address.district.temp1[0] = "abc";
console.log(person);
console.log(newPerson);
person.getName();
newPerson.getName();
//function
function deepCopy(object) {
  let copyObj = Array.isArray(object) ? [...object] : { ...object };
  for (let key in object) {
    if (
      (object[key] !== null && object[key].constructor === Object) ||
      Array.isArray(object[key])
    ) {
      copyObj[key] = deepCopy(object[key]);
    } else {
      copyObj[key] = object[key];
    }
  }
  return copyObj;
}
