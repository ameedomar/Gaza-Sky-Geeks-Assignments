var person = {
  name: "Ahmad",
  age: 22,
  address: {
    buildingNo: "123",
    isRenting: true,
  },
};
var copyPerson = person;

console.log(Object.keys(person) + "\n" + Object.keys(person.address));
var copy_isRenting = !person.address.isRenting;
console.log(copy_isRenting);
let info = "(";
let i = 0;
for (const [key, value] of Object.entries(copyPerson)) {
  if (key == "address") {
    info += "(";

    for (const [key1, value1] of Object.entries(value)) {
      i++;
      if (i == Object.entries(value).length) info += value1;
      else info += value1 + "-";
    }
    info += ")";
  } else info += value + "-";
}
info += ")";
console.log(info);
