function assignNumber(people) {
  // MY SOLUTION
  //   people
  //     .map((person) => {
  //       return employee = {
  //         name: person,
  //         personalNumber: person.length,
  //       };
  //     })
  //     .forEach((employee) =>
  //       console.log(
  //         `Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`
  //       )
  //     );

  // LECTURER's SOLUTION

  const employees = people.reduce((acc, curr) => {
    acc[curr] = curr.length;
    return acc;
  }, {});

  Object.keys(employees).forEach((key) => {
    console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
  });
}

assignNumber([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
