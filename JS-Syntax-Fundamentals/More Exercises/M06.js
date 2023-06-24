function login(credentials) {
  let [username, ...passwords] = credentials;

  let correctPassword = username.split("").reverse().join("");

  for (let index = 0; index < passwords.length; index++) {
    if (correctPassword !== passwords[index]) {
      if (index <= 2) {
        console.log("Incorrect password. Try again.");
      } else {
        console.log(`User ${username} blocked!`);
        break;
      }
    } else {
      console.log(`User ${username} logged in.`);
      return;
    }
  }
}

login(["sunny", "rainy", "cloudy", "ynnus", "not sunny"]);
