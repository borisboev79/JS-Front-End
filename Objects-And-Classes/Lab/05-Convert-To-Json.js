function convertToJson(name, lastName, hairColor) {
  const person = {
    name,
    lastName,
    hairColor,
  };

  console.log(JSON.stringify(person));
}

convertToJson("George", "Jones", "Brown");
