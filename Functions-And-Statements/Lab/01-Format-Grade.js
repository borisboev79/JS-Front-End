function grade(grade) {
  let text;
  if (grade < 3.0) {
    console.log(`Fail (2)`);
  } else if (grade < 3.5) {
    text = "Poor";
  } else if (grade < 4.5) {
    text = "Good";
  } else if (grade < 5.5) {
    text = "Very good";
  } else if (grade <= 6.0) {
    text = "Excellent";
  }
  if (grade >= 3.0) {
    console.log(`${text} (${grade.toFixed(2)})`);
  }
}

grade(2.53);
